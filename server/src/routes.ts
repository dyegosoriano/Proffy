import { Router } from 'express'

import ClassesController from './controller/ClassesController'

const routes = new Router()

routes.post('/classes', ClassesController.store)

export default routes
