const express = require('express');
const Cliente = require('/.modeloCliente');

const router = express.Router();

//Criando cadastro de cliente
router.post('/cliente', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoClienteEnderecoId = requisicao.body.clienteEnderecoId;

    Cliente.create({
        nome:nome,
        cpf:cpf,
        cnpj:cnpj,
        dataNascimento:dataNascimento,
        clienteEnderecoId:codigoClienteEnderecoId
    }).then(() => {
        resposta.send('Cadastrado do cliente concluido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro ao cadastrar o cliente: ' + erro);
    });
});

    //Consultando clientes
    router.get('/cliente', async (requisicao, resposta) => {
        const cliente = await Cliente.findAll();
        resposta.send(cliente);
    });

        //Alterando cadastro do cliente
        router.put('/cliente/:clienteId', (requisicao, resposta) => {
            const codigoCliente = requisicao.params.clienteId;
            const nome = requisicao.body.nome;
            const cpf = requisicao.body.cpf;
            const cnpj = requisicao.body.cnpj;
            const dataNascimento = requisicao.body.dataNascimento;
            const codigoClienteEnderecoId = requisicao.body.clienteEnderecoId;
        
            Cliente.update({
                nome:nome,
                cpf:cpf,
                cnpj:cnpj,
                dataNascimento:dataNascimento,
                clienteEnderecoId:codigoClienteEnderecoId
            }, {
                where: {
                    codigo: codigoCliente
                }
            }).then(() => {
                resposta.send('Atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            //Excluindo cadastro do cliente
            router.delete('/cliente/:clienteId', (requisicao, resposta) => {
                const codigoCliente = requisicao.params.clienteId;
                Cliente.destroy({ where: { codigo: codigoCliente } }).then(() => {
                    resposta.send('Cadastro do cliente excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Erro ao excluir o cadastro do cliente: ' +erro);
                });
            });

            module.exports = router;