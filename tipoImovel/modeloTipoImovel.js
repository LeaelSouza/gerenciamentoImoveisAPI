const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Imovel = conexao.define('tipoImovel', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        descricao: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
}, {
    timestamps: false
});

Imovel.sync({
   alter: true
});

modeule.exports = Imovel;