const express = require('express');
const router = express.Router();
const Imovel = require('./modeloImovel');

router.post('/imovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const areaMetro = requisicao.body.areaMetro;
    const codigotipoImovelId = requisicao.body.tipoImovelId;
    const codigoImovelEnderecoId = requisicao.body.codEndereco;

        Imovel.create({
            descricao:descricao,
            areaMetro:areaMetro,
            codTipoImovel:codigotipoImovelId,
            codEndereco:codigoImovelEnderecoId
        }).then(() => {
            resposta.send('Imóvel cadastrado com sucesso');
        }).catch((erro) => {
            resposta.send('Ocorreu um erro ao cadastrar o Imóvel'+ erro);
        });
});

    router.get('/imovel', async (requisicao, resposta) => {
        const imovel = await Imovel.findAll();
        resposta.send(imovel);
    });

        router.put('/imovel/:imovelId', (requisicao, resposta) => {
            const codigoImovel = requisicao.params.imovelId;
                const descricao = requisicao.body.descricao;
                const areaMetro = requisicao.body.areaMetro;
                const codigotipoImovelId = requisicao.body.codTipoImovel;
                const codigoImovelEnderecoId = requisicao.body.codEndereco;

            Imovel.update({
                descricao:descricao,
                areaMetro:areaMetro,
                codTipoImovel:codigotipoImovelId,
                codEndereco:codigoImovelEnderecoId
            }, {
                where: {
                    codImovel: codigoImovel
                }
            }).then(() => {
                resposta.send('Imovel atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            router.delete('/imovel/:imovelId', (requisicao, resposta) => {
                const codigoImovel = requisicao.params.imovelId;
                Imovel.destroy({ where: { codImovel: codigoImovel } }).then(() => {
                    resposta.send('Imovel removido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro ao remover o Imovel: ' +erro);
                });
            });

            module.exports = router;