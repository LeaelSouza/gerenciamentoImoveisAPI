const express = require('express');
const router = express.Router();
const TipoImovel = require('./modeloTipoImovel');

router.post('/tipoImovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
        TipoImovel.create({
            descricao:descricao
        }).then(() => {
            resposta.send("Cadastrado com sucesso");
        }).catch((erro) => {
            resposta.send("Ocorreu um erro" +erro);
        });
});

    router.get('/tipoImovel', async (requisicao, resposta) => {
        const tipoImovel = await TipoImovel.findAll();
        resposta.send(tipoImovel);
    });

        router.put('/tipoImovel/:tipoImovelId',  (requisicao, resposta) =>{
            const codigoImovel = requisicao.params.tipoImovelId;
                const descricao = requisicao.body.descricao;
            
            TipoImovel.update({
                descricao:descricao
            },{
                where: {
                    codTipoImovel: codigoImovel
                }
            }).then(() => {
                resposta.send('Tipo do Imovel atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            router.delete('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
                const codigoImovel = requisicao.params.tipoImovelId;
                TipoImovel.destroy({ where: { codTipoImovel: codigoImovel }  }).then(() => {
                    resposta.send('Tipo do Imóvel excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro ao excluir o tipo do imóvel: ' +erro);
                });
            });

            module.exports = router;