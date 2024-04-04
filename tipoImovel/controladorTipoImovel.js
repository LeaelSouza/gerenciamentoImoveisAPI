const express = require('express');
const router = express.Router();
const TipoImovel = require('./modeloTipoImovel');


//Criando tipo imovel
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

    //Consultando tipo imovel
    router.get('/tipoImovel', async (requisicao, resposta) => {
        const tipoImovel = await TipoImovel.findAll();
        resposta.send(tipoImovel);
    });

        //Atualizando tipo imovel
        router.put('/tipoImovel/:tipoImovelId',  (requisicao, resposta) =>{
            const codigoTipoImovel = requisicao.params.tipoImovelId;
                const descricao = requisicao.body.descricao;
            
            TipoImovel.update({
                descricao:descricao
            },{
                where: {
                    codigo: codigoTipoImovel
                }
            }).then(() => {
                resposta.send('Tipo do Imovel atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            //Deletar tipo imóvel
            router.delete('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
                const codigoTipoImovel = requisicao.params.tipoImovelId;
                TipoImovel.destroy({ where: { codigo: codigoTipoImovel }  }).then(() => {
                    resposta.send('Tipo do Imóvel excluido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro ao excluir o tipo do imóvel: ' +erro);
                });
            });

            module.exports = router;