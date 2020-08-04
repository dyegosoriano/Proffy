import { Router } from 'express'

import ClassesController from './controller/ClassesController'

const routes = new Router()

routes.post('/classes', ClassesController.store)
routes.get('/classes', ClassesController.index)

export default routes
