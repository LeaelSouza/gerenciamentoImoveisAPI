const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('/.endereco/modeloEndereco');

const Proprietario = conexao.define('proprietario', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        nome: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
            cpf: {
                type: Sequelize.CHAR(11),
                allowNull: false,
                unique: true
            },
                cnpj: {
                    type: Sequelize.CHAR(14),
                    allowNull: true
                },
                    dataNascimento: {
                        type: Date,
                        allowNull: false
                    },
                        propriedadeEnderecoId: {
                            type: Sequelize.INTEGER,
                            allowNull: false,
                            references: {
                                model: Endereco,
                                key: 'codigo'
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