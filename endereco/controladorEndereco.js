const express = require('express');
const router = express.Router();
const Endereco = require('./modeloEndereco');


//Criando endereço
router.post('/endereco', (requisicao, resposta) => {
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;

        Endereco.create({
            estado:estado,
            cidade:cidade,
            bairro:bairro,
            rua:rua,
            complemento:complemento,
            cep:cep
        }).then(() => {
            resposta.send("Cadastrado com sucesso");
        }).catch((erro) => {
            resposta.send("Ocorreu um erro", erro);
        });
});


    //Consultando endereços
    router.get('/endereco', async (requisicao, resposta) => {
        const endereco = await Endereco.findAll();
        resposta.send(endereco);
    });

        //Atualizando endereço
        router.put('/endereco/:enderecoId', (requisicao, resposta) =>{
            const codigoEndereco = requisicao.params.enderecoId;
                const estado = requisicao.body.estado;
                const cidade = requisicao.body.cidade;
                const bairro = requisicao.body.bairro;
                const rua = requisicao.body.rua;
                const complemento = requisicao.body.complemento;
                const cep = requisicao.body.cep;

            Endereco.update({
                estado:estado,
                cidade:cidade,
                bairro:bairro,
                rua:rua,
                complemento:complemento,
                cep:cep
            }, {
                where: {
                    codigo: codigoEndereco
                }
            }).then(() => {
                resposta.send('Endereço aualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            //Deletar endereço
            router.delete('/endereco/:enderecoId', (requisicao, resposta) => {
                const codigoEndereco = requisicao.params.enderecoId;
                Endereco.destroy({where: { codigo: codigoEndereco } }).then(() => {
                    resposta.send('Endereço removido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro: ' +erro);
                });
            });

            module.exports = router();