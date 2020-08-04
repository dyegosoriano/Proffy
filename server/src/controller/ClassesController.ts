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
}

export default new ClassesController()
