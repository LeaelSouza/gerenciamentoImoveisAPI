const express = require('express');
const router = express.Router();
const Historico = require('./modeloHistorico');

router.post('/historico', (requisicao, resposta) => {
    const dataNegocio = requisicao.body.dataNegocio;
    const percentualComissao = requisicao.body.percentualComissao;
    const codigoImovel = requisicao.body.codImovel;
    const codigoCliente = requisicao.body.codCliente;
    const codigoCorretor = requisicao.body.codCorretor;

    Historico.create({
        dataNegocio:dataNegocio,
        percentualComissao:percentualComissao,
        codImovel:codigoImovel,
        codCliente:codigoCliente,
        codCorretor:codigoCorretor
    }).then(() => {
        resposta.send('Histórico cadastrado com sucesso');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro ao cadastrar o Histórico: '+ erro);
    });
});

    router.get('historico', async (requisicao, resposta) => {
      const historico  = await Historico.findAll();
      resposta.send(historico);
    });

        router.put('/historico/:historicoId', (requisicao, resposta) => {
            const codigoHistorico = requisicao.params.historicoId;
            const dataNegocio = requisicao.body.dataNegocio;
            const percentualComissao = requisicao.body.percentualComissao;
            const codigoImovel = requisicao.body.codImovel;
            const codigoCliente = requisicao.body.codCliente;
            const codigoCorretor = requisicao.body.codCorretor;

            Historico.update({
                dataNegocio:dataNegocio,
                percentualComissao:percentualComissao,
                codImovel:codigoImovel,
                codCliente:codigoCliente,
                codCorretor:codigoCorretor
            },{
                where: {
                    codHistorico: codigoHistorico
                }
            }).then(() => {
                resposta.send('Histórico atualizado com sucesso.');
            }).catch((erro) => {
                resposta.send('Ocorreu um erro: ' + erro);
            });
        });

            router.delete('/historico/:historicoId', (requisicao, resposta) => {
                const codigoHistorico = requisicao.params.historicoId;
                Historico.destroy({ where: { codHistorico: codigoHistorico } }).then(() =>{
                    resposta.send('Histórico removido com sucesso!');
                }).catch((erro) => {
                    resposta.send('Ocorreu um erro ao excluir o histórico: ' +erro);
                });
            });

            module.exports = Historico;