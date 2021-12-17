import { Application, Router } from '@cfworker/web'
import createTelegrafMiddware from 'cfworker-middware-telegraf'
import bot from './bot'
import botConfig from './bot.config'

const router = new Router()
router.post(botConfig.webhook.path, createTelegrafMiddware(bot))

new Application().use(router.middleware).listen()
