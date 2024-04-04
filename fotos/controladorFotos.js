const express = require('express');
const router = express.Router();
const Foto = require('./modeloFotos');

//Criando foto
router.post('/foto', (requisicao, resposta) => {
    const chaveAWS = requisicao.body.chaveAWS;
    const codigofotoImovelId = requisicao.body.fotoImovelId;

    Foto.Create({
        chaveAWS:chaveAWS,
        fotoImovelId:codigofotoImovelId
    }).then(() => {
        resposta.send('A foto foi cadastrada com sucesso!');
    }).catch((erro) => {
        resposta.send('Ouve um erro ao cadastrar a foto !', erro);
    });
});

    //Consultando foto
    router.get('/foto', async (requisicao, respota) => {
        const foto = await Foto.findAll();
        resposta.send(foto);
    })

        //Atualizando foto
        router.put('/foto/:fotoId', (requisicao, resposta) => {
            const codigoFoto = requisicao.params.fotoId;
                const chaveAWS = requisicao.body.chaveAWS;
                const codigofotoImovelId = requisicao.body.fotoImovelId;

            Foto.update({
                chaveAWS:chaveAWS,
                fotoImovelId:codigofotoImovelId
            },{
                where: {
                    codigo: codigoFoto
                }
            }).then(() => {
                resposta.send('Atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

                //Deletar foto
                router.delete('/foto/:fotoId',  (requisicao, resposta) => {
                    const codigoFoto = requisicao.params.fotoId;
                    Foto.destroy({ where: { cogido: codigoFoto } }).then(() => {
                        resposta.send('Cadastro de foto excluida com sucesso!');
                    }).catch((erro) => {
                        resposta.send('Ocorreu um erro ao excluir o cadastro da foto: ' +erro);
                    });
                });

                module.exports = router;