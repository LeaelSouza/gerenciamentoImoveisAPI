const espresso = require('express');

const route = espresso();
route.use(espressoo.json());

//Rotas
const rotasEndereco = require('./endereco/controladorEndereco');
route.use(rotasEndereco);

const rotasCliente = require('./cliente/controladorCliente')
route.use(rotasCliente);

const rotasCorretor = require('./corretor/controladorCorretor');
route.use(rotasCorretor);

const rotasHistorico = require('./historico/controladorHistorico');
route.use(rotasHistorico);

const rotasImovel = require('./Imovel/controladorImovel');
route.use(rotasImovel);

const rotasFoto = require('./fotos/controladorFotos');
route.use(rotasFoto);

const rotasProprietario = require('./proprietario/controladorProprietario');
route.use(rotasProprietario);

const rotasTipoImovel = requiser('./tipoImovel/controladorTipoImovel');
route.use(rotasTipoImovel);

const rotasVisita = require('./visita/controladorVisita');
route.use(rotasVisita);


route.listen(4300, () => {
    console.log('Funcionou!');
});