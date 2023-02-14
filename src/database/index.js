import Sequelize from 'sequelize'

import PokeTeam from '../app/models/PokeTeam.js'
import configDatabase from '../config/database.js'

const models = [PokeTeam]
class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database()