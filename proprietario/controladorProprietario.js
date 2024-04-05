const express = require('express');
const router = express.Router();
const Proprietario = require('./modeloProprietario');

router.post('/proprietario', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoPropriedadeEnderecoId = requisicao.body.codEndereco;

    Proprietario.Create({
        nome:nome,
        CPF:CPF,
        CNPJ:CNPJ,
        dataNascimento:dataNascimento,
        codEndereco:codigoPropriedadeEnderecoId
    }).then(() => {
        resposta.send('Proprietario cadastrado com sucesso!');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro ao cadastrar um Proprietario.');
    });
});

    router.get('/proprietario', async (requisicao, resposta) => {
        const proprietario = await Proprietario.findAll();
        resposta.send(proprietario);
    });

        router.put('/proprietario/proprietarioId', (requisicao, resposta) => {
            const codigoProprietario = requisicao.params.proprietarioId;
                const nome = requisicao.body.nome;
                const CPF = requisicao.body.CPF;
                const CNPJ = requisicao.body.CNPJ;
                const dataNascimento = requisicao.body.dataNascimento;
                const codigoPropriedadeEnderecoId = requisicao.body.codEndereco;

                Proprietario.update({
                    nome:nome,
                    CPF:CPF,
                    CNPJ:CNPJ,
                    dataNascimento:dataNascimento,
                    codEndereco:codigoPropriedadeEnderecoId
                },{
                    where: {
                        codProprietario: codigoProprietario
                    }
                }).then(() => {
                    resposta.send('Atualizado com sucesso.');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro: ' + erro);
                });
        });

            router.delete('/proprietario/proprietarioId', (requisicao, resposta) => {
                const codigoProprietario = requisicao.params.proprietarioId;
                Proprietario.destroy({ where: { codProprietario: codigoProprietario } }).then(() => {
                    resposta.send('Registro do proprietario excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Erro ao excluir registro de proprietario: ' +erro);
                });
            });

            module.exports = router;