const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Imovel = require('./imovel/modeloImovel');
const Foto = conexao.define('foto', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        chaveAWS: {
            type: Sequelize.CHAR(36),
            allowNull: false
        },
            fotoImovelId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    modelo: Foto,
                    key: 'codigo'
                },
                onDelete: 'CASCADE'
            }
}, {
    timestamps: false
});

Foto.sync({
    alter: true
});

module.exports = Foto;