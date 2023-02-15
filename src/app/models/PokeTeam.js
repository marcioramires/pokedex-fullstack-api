import Sequelize, { Model } from 'sequelize'

class PokeTeam extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                team: Sequelize.ARRAY(Sequelize.STRING)
            },
            {
                sequelize,
            }
        )
        return this
    }
}

export default PokeTeam