const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const imovel = require('../Imovel/modeloImovel');
const cliente = require('../cliente/modeloCliente');
const corretor = require('../corretor/modeloCorretor');

const Historico = conexao.define('corretor', {
    codHistorico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        dataNegocio: {
            type: Sequelize.DATE,
            allowNull: false
        },
            percentualComissao: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
                codImovel: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: imovel,
                        key: 'codImovel'
                    },
                    onDelete: 'CASCADE'
                },
                    codCliente: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        references: {
                            model: cliente,
                            key: 'codCliente'
                        },
                    onDelete: 'CASCADE'
                    },
                        codCorretor: {
                            type: Sequelize.INTEGER,
                            allowNull: false,
                            references: {
                                model: corretor,
                                key: 'codCorretor'
                            },
                            onDelete: 'CASCADE'
                        }
},{
    timestamps: false
});

Historico.sync({
    alter:true
});

module.exports = Historico;