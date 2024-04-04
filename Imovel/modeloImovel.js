const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const tipoImovel = require('./tipoImovel/modeloTipoImovel');
const endereco = require('./endereco/modeloEndereco');
const Imovel = conexao.define('imovel', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        descricao:{
            type: Sequelize.STRING(400),
            allowNull: false
        },
            areaMetro: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
                tipoImovelId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    refereneces: {
                        model: tipoImovel,
                        key: 'codigo'
                    },
                    onDelete: false 
                },
                    imovelEnderecoId: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        refereneces: {
                            model: endereco,
                            key: 'codigo'
                        },
                        onDelete: 'CASCADE'
                    }
}, {
    timestamps: false
});

Imovel.sync({
   alter: true
});

modeule.exports = Imovel;