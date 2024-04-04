const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const endereco = require('../endereco/modeloEndereco');
const Cliente = conexao.define('cliente', {
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
                        type: Sequelize.DATE,
                        allowNull: false
                    },
                        clienteEnderecoId: {
                            type: Sequelize.INTEGER,
                            allowNull: false,
                            references: {
                                model: endereco,
                                key: 'codigo'
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