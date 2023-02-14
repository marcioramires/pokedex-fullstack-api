import { Router } from 'express'

import PokeTeamController from './app/controllers/PokeTeamController.js'

const routes = new Router()

routes.post('/poketeam', PokeTeamController.store)
routes.get('/poketeam', PokeTeamController.index)
routes.put('/poketeam/:id', PokeTeamController.update)
routes.delete('/poketeam/:id', PokeTeamController.delete)

export default routes