import { Request, Response } from 'express'

import db from 'src/database/connection'

class ConnectionsController {
  async store(request: Request, response: Response) {
    const { user_id } = request.body

    try {
      // Cadastrar dados
      await db('connections').insert({ user_id })

      return response.status(201).send()
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async index(request: Request, response: Response) {
    try {
      // Listagem de dados
      const totalConnects = await db('connections').count('* as total')
      const { total } = totalConnects[0]

      return response.json({ total })
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }
}

export default new ConnectionsController()
