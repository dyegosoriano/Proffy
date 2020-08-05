import { Router } from 'express'

import ClassesController from './controller/ClassesController'
import ConnectionsController from './controller/ConnectionsController'

const routes = new Router()

routes
  .get('/classes', ClassesController.index)
  .post('/classes', ClassesController.store)

  .get('/connection', ConnectionsController.index)
  .post('/connection', ConnectionsController.store)

export default routes
