import * as Yup from 'yup'
import PokeTeam from '../models/PokeTeam.js'

class PokeTeamController {
    async store(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            team: Yup.array().required(),
        })
        try {
            schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const { name, team } = request.body

        const teamExists = await PokeTeam.findOne({
            where: { name },
        })

        if (teamExists) {
            return response.status(400).json({ error: 'Team already exists' })
        }

        const { id } = await PokeTeam.create({ name, team })

        return response.json({ id, name })
    }

    async index(request, response) {

        const teams = await PokeTeam.findAll()

        return response.json(teams)
    }

    async update(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string(),
            team: Yup.array(),
        })

        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const { id } = request.params

        const oldTeam = await PokeTeam.findByPk(id)

        if (!oldTeam) {
            return response.status(401).json({ error: "Make sure your team ID is correct" })
        }

        const { name, team } = request.body

        await PokeTeam.update(
            {
                name,
                team,
            },
            { where: { id } }
        )

        return response.status(200).json()
    }

    async delete(request, response) {

        await PokeTeam.destroy({ where: { id: request.params.id }});
        const teams = await PokeTeam.findAll()
        
        return response.json(teams)
    }
}

export default new PokeTeamController()