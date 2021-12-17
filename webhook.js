const botConfig = require('./bot.config')
const Telegraf = require('telegraf')
const bot = new Telegraf(botConfig.token)

switch (process.argv[2]) {
	case 'set':
		bot.telegram.setWebhook(botConfig.webhook.host + botConfig.webhook.path)
		break
	case 'delete':
		bot.telegram.deleteWebhook()
		break
	case 'getInfo':
		bot.telegram.getWebhookInfo().then((data) => {
			console.log(data)
		})
		break
}
