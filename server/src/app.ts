import express from 'express'
// import cors from 'cors'

import routes from './routes'

class App {
  public server: express.Application

  public constructor() {
    this.server = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.server.use(express.json())
    // this.server.use(cors())
  }

  private database(): void {
    // Config database
  }

  private routes(): void {
    this.server.use(routes)
  }
}

export default new App().server
