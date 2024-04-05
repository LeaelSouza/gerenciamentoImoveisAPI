const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const endereco = require('../endereco/modeloEndereco');
const Cliente = conexao.define('cliente', {
    codCLiente: {
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
                        type: Sequelize.DATE,
                        allowNull: false
                    },
                        codEndereco: {
                            type: Sequelize.INTEGER,
                            allowNull: false,
                            references: {
                                model: endereco,
                                key: 'codEndereco'
                            }
                        },
                        onDelete: 'CASCADE'
}, {
    timestamps: false
});

Cliente.sync({
   alter: true
});

modeule.exports = Cliente;