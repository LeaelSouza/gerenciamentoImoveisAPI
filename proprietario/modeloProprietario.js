const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco');

const Proprietario = conexao.define('proprietario', {
    codProprietario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        nome: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
            CPF: {
                type: Sequelize.CHAR(11),
                allowNull: false,
                unique: true
            },
                CNPJ: {
                    type: Sequelize.CHAR(14),
                    allowNull: true
                },
                    dataNascimento: {
                        type: Date,
                        allowNull: false
                    },
                        codEndereco: {
                            type: Sequelize.INTEGER,
                            allowNull: false,
                            references: {
                                model: endereco,
                                key: 'codEndereco'
                            },
                            onDelete: 'CASCADE'
                        }
}, {
    timestamps: false
});

Proprietario.sync({
    alter: true
});

module.exports = Proprietario;