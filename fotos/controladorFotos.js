const express = require('express');
const router = express.Router();
const Foto = require('./modeloFotos');

router.post('/foto', (requisicao, resposta) => {
    const chaveAWS = requisicao.body.chaveAWS;
    const codigofotoImovelId = requisicao.body.codImovel;
    Foto.Create({
        chaveAWS:chaveAWS,
        codImovel:codigofotoImovelId
    }).then(() => {
        resposta.send('A foto foi cadastrada com sucesso!');
    }).catch((erro) => {
        resposta.send('Ouve um erro ao cadastrar a foto !', erro);
    });
});

    router.get('/foto', async (requisicao, respota) => {
        const foto = await Foto.findAll();
        resposta.send(foto);
    });

        router.put('/foto/:fotoId', (requisicao, resposta) => {
            const codigoFoto = requisicao.params.fotoId;
                const chaveAWS = requisicao.body.chaveAWS;
                const codigofotoImovelId = requisicao.body.codImovel;

            Foto.update({
                chaveAWS:chaveAWS,
                codImovel:codigofotoImovelId
            },{
                where: {
                    codImagem: codigoFoto
                }
            }).then(() => {
                resposta.send('Atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

                router.delete('/foto/:fotoId',  (requisicao, resposta) => {
                    const codigoFoto = requisicao.params.fotoId;
                    Foto.destroy({ where: { codImagem: codigoFoto } }).then(() => {
                        resposta.send('Cadastro de foto excluida com sucesso!');
                    }).catch((erro) => {
                        resposta.send('Ocorreu um erro ao excluir o cadastro da foto: ' +erro);
                    });
                });

                module.exports = router;