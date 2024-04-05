const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const cliente = require('../cliente/modeloCliente');
const Imovel = require('../Imovel/modeloImovel');
const Visita = conexao.define('visita', {
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'
    },
        dataVisita: {
            type: Sequelize.DATE,
            allowNull: false
        },
            visitaRealizada: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },  
                codCliente: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: cliente,
                        key: 'codCliente'
                    }
                },
                onDelete: 'CASCADE'
}, { 
    timestamps: false
});

Visita.sync({
    alter: true
});

module.exports = Visita;