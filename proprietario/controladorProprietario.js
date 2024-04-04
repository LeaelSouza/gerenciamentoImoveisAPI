const express = require('express');
const router = express.Router();
const Proprietario = require('/modeloProprietario');

//Criando um proprietario
router.post('/proprietario', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoPropriedadeEnderecoId = requisicao.body.propriedadeEnderecoId;

    Proprietario.Create({
        nome:nome,
        cpf:cpf,
        cnpj:cnpj,
        dataNascimento:dataNascimento,
        propriedadeEnderecoId:codigoPropriedadeEnderecoId
    }).then(() => {
        resposta.send('Proprietario cadastrado com sucesso!');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro ao cadastrar um Proprietario.');
    });
});

    //Consultando proprietario
    router.get('/proprietario', async (requisicao, resposta) => {
        const proprietario = await Proprietario.findAll();
        resposta.send(proprietario);
    })

        //Atualizando proprietario
        router.put('/proprietario/proprietarioId', (requisicao, resposta) => {
            const codigoProprietario = requisicao.params.proprietarioId;
                const nome = requisicao.body.nome;
                const cpf = requisicao.body.cpf;
                const cnpj = requisicao.body.cnpj;
                const dataNascimento = requisicao.body.dataNascimento;
                const codigoPropriedadeEnderecoId = requisicao.body.propriedadeEnderecoId;

                Proprietario.update({
                    nome:nome,
                    cpf:cpf,
                    cnpj:cnpj,
                    dataNascimento:dataNascimento,
                    propriedadeEnderecoId:codigoPropriedadeEnderecoId
                },{
                    where: {
                        codigo: codigoProprietario
                    }
                }).then(() => {
                    resposta.send('Atualizado com sucesso.');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro: ' + erro);
                });
        });

            //Deletar proprietario
            router.delete('/proprietario/proprietarioId', (requisicao, resposta) => {
                const codigoProprietario = requisicao.params.proprietarioId;
                Proprietario.destroy({ where: { codigo: codigoProprietario } }).then(() => {
                    resposta.send('Registro do proprietario excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Erro ao excluir registro de proprietario: ' +erro);
                })
            });

            module.exports = router;