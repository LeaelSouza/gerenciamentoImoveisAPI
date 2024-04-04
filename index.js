const espresso = require('express');

const route = espresso();
route.use(espressoo.json());

//Rotas
const rotasEndereco = require('./endereco/controladorEndereco');
route.use(rotasEndereco);

const rotasTipoImovel = requiser('./tipoImovel/controladorTipoImovel');
route.use(rotasTipoImovel);

const rotasImovel = require('./Imovel/controladorImovel');
route.use(rotasImovel);

const rotasFoto = require('./fotos/controladorFotos');
route.use(rotasFoto);

const rotasProprietario = require('./proprietario/controladorProprietario');
route.use(rotasProprietario);

const rotasCliente = require('./cliente/controladorCliente')
route.use(rotasCliente);

route.listen(4300, () => {
    console.log('Funcionou!');
});