
//importar modelos aqui
//inicializa os modelos e conecta ao bd
const config = require('../config/bd');
const {Sequelize} = require('sequelize');
const ViagemAviao = require('../models/ViagemAviao');
const Usuario = require('../models/Usuario');
const Passageiro = require('../models/Passageiro');
const Checkin = require('../models/Checkin');
const PassageiroViagem = require('../models/PassageiroViagem')
const Bagagem = require('../models/Bagagem')
const Avaliacao = require('../models/Avaliacao')

const models= [ViagemAviao, Usuario, Passageiro, Checkin, PassageiroViagem, Bagagem, Avaliacao]

class Database{
    constructor(){
        this.connection = new Sequelize(config);
        this.init();
        this.associate();
    }
    init() {
        models.forEach((model) => model.init(this.connection));
    }

    associate() {
        models.forEach((model) => {
          if (model.associate) {
            model.associate(this.connection.models);
          }
        });
    }
}

module.exports = new Database()
