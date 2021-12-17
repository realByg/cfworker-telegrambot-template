import { Telegraf } from 'telegraf'
import botConfig from '../../bot.config'

const bot = new Telegraf(botConfig.token)

bot.start((ctx) => ctx.reply('Welcome'))
bot.command('test', (ctx) => ctx.reply([]?.[2] ?? 'ok'))

export default bot
