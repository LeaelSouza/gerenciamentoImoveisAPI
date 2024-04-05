const express = require('express');
const Corretor = require('./modeloCorretor');

const router = express.Router();

router.post('/corretor', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoClienteEnderecoId = requisicao.body.codEndereco;

    Corretor.create({
        nome:nome,
        CPF:CPF,
        CNPJ:CNPJ,
        dataNascimento:dataNascimento,
        codEndereco:codigoClienteEnderecoId
    }).then(() => {
        resposta.send('Cadastrado do corretor concluido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro ao cadastrar o corretor: ' + erro);
    });
});

    router.get('/corretor', async (requisicao, resposta) => {
        const corretor = await Corretor.findAll();
        resposta.send(corretor);
    });

        router.put('/corretor/:corretorId', (requisicao, resposta) => {
            const codcorretor = requisicao.params.corretorId;
            const nome = requisicao.body.nome;
            const CPF = requisicao.body.CPF;
            const CNPJ = requisicao.body.CNPJ;
            const dataNascimento = requisicao.body.dataNascimento;
            const codigoClienteEnderecoId = requisicao.body.codEndereco;
        
            Corretor.update({
                nome:nome,
                CPF:CPF,
                CNPJ:CNPJ,
                dataNascimento:dataNascimento,
                codEndereco:codigoClienteEnderecoId
            }, {
                where: {
                    codCorretor: codcorretor
                }
            }).then(() => {
                resposta.send('Atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            router.delete('/corretor/:corretorId', (requisicao, resposta) => {
                const codcorretor = requisicao.params.corretorId;
                Corretor.destroy({ where: { codCorretor: codcorretor } }).then(() => {
                    resposta.send('Cadastro do corretor excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Erro ao excluir o cadastro do corretor: ' +erro);
                });
            });

            module.exports = router;