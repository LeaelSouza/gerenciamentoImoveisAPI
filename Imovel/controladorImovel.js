const express = require('express');
const router = express.Router();
const Imovel = require('/modeloImovel');

//Criando um imóvel
router.post('/imovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const areaMetro = requisicao.body.areaMetro;
    const codigotipoImovelId = requisicao.body.tipoImovelId;
    const codigoImovelEnderecoId = requisicao.body.imovelEnderecoId;

        Imovel.create({
            descricao:descricao,
            areaMetro:areaMetro,
            tipoImovelId:codigotipoImovelId,
            imovelEnderecoId:codigoImovelEnderecoId
        }).then(() => {
            resposta.send('Imóvel cadastrado com sucesso');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro ao cadastrar o Imóvel'+ erro);
        });
});

    //Consultando imóvel
    router.get('/imovel', async (requisicao, resposta) => {
        const imovel = await Imovel.findAll();
        resposta.send(imovel);
    });

        //Atualizando imóvel
        router.put('/imovel/:imovelId', (requisicao, resposta) => {
            const codigoImovel = requisicao.params.imovelId;
                const descricao = requisicao.body.descricao;
                const areaMetro = requisicao.body.areaMetro;
                const codigotipoImovelId = requisicao.body.tipoImovelId;
                const codigoImovelEnderecoId = requisicao.body.imovelEnderecoId;

            Imovel.update({
                descricao:descricao,
                areaMetro:areaMetro,
                tipoImovelId:codigotipoImovelId,
                imovelEnderecoId:codigoImovelEnderecoId
            }, {
                where: {
                    codigo: codigoImovel
                }
            }).then(() => {
                resposta.send('Imovel atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            //Deletar imovel
            router.delete('/imovel/:imovelId', (requisicao, resposta) => {
                const codigoImovel = requisicao.params.imovelId;
                Imovel.destroy({ where: { codigo: codigoImovel } }).then(() => {
                    resposta.send('Imovel removido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro ao remover o Imovel: ' +erro);
                });
            });

            module.exports = router;