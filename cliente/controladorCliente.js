const express = require('express');
const Cliente = require('./modeloCliente');

const router = express.Router();

router.post('/cliente', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoClienteEnderecoId = requisicao.body.codEndereco;

    Cliente.create({
        nome:nome,
        CPF:CPF,
        CNPJ:CNPJ,
        dataNascimento:dataNascimento,
        codEndereco:codigoClienteEnderecoId
    }).then(() => {
        resposta.send('Cadastrado do cliente concluido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro ao cadastrar o cliente: ' + erro);
    });
});

    router.get('/cliente', async (requisicao, resposta) => {
        const cliente = await Cliente.findAll();
        resposta.send(cliente);
    });

        router.put('/cliente/:clienteId', (requisicao, resposta) => {
            const codigoCliente = requisicao.params.clienteId;
            const nome = requisicao.body.nome;
            const CPF = requisicao.body.CPF;
            const CNPJ = requisicao.body.CNPJ;
            const dataNascimento = requisicao.body.dataNascimento;
            const codigoClienteEnderecoId = requisicao.body.codEndereco;
        
            Cliente.update({
                nome:nome,
                CPF:CPF,
                CNPJ:CNPJ,
                dataNascimento:dataNascimento,
                codEndereco:codigoClienteEnderecoId
            }, {
                where: {
                    codCliente: codigoCliente
                }
            }).then(() => {
                resposta.send('Atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            router.delete('/cliente/:clienteId', (requisicao, resposta) => {
                const codigoCliente = requisicao.params.clienteId;
                Cliente.destroy({ where: { codCliente: codigoCliente } }).then(() => {
                    resposta.send('Cadastro do cliente excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Erro ao excluir o cadastro do cliente: ' +erro);
                });
            });

            module.exports = router;