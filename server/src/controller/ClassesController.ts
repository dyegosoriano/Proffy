import { Request, Response } from 'express'

import db from 'src/database/connection'

import convertHoursToMinutes from 'src/utils/convertHoursToMinutes'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

class ClassesController {
  async store(request: Request, response: Response) {
    const {
      name,
      subject,
      cost,
      schedule,
      whatsapp,
      bio,
      avatar,
    } = request.body

    const trx = await db.transaction()

    try {
      // Cadastrar dados
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })

      const user_id = insertedUsersIds[0]

      const inserteClassesIds = await trx('classes').insert({
        user_id,
        subject,
        cost,
      })

      const class_id = inserteClassesIds[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to),
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return response.status(201).send()
      return response.json({ ok: true })
    } catch (error) {
      await trx.rollback()

      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(400)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async index(request: Request, response: Response) {
    const filters = request.query

    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    if (!week_day || !subject || !time) {
      return response
        .status(400)
        .json({ error: 'Missing filters to search classes' })
    }

    const timeInMinutes = convertHoursToMinutes(time)

    try {
      // Listagem de dados
      const classes = await db('classes')
        .whereExists(function () {
          this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*'])

      return response.json(classes)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }
}

export default new ClassesController()
