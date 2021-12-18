const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const botConfig = require('./bot.config')
const Telegraf = require('telegraf')
const bot = new Telegraf(botConfig.token)

rl.question('1. setWebhook\t2. deleteWebhook\t3. getWebhookInfo\n', (_choice) => {
	const choice = Number(String(_choice).trim())
	switch (choice) {
		case 1:
			rl.question('webhook host: ', (_webhookHost) => {
				const webhookHost = String(_webhookHost).trim()
				if (
					webhookHost === '' ||
					!webhookHost.startsWith('https://') ||
					webhookHost.endsWith('/')
				) {
					console.log('invalid webhook host')
					rl.close()
					return
				}

				bot.telegram.setWebhook(webhookHost.trim() + botConfig.webhookPath)
				console.log('done')
				rl.close()
			})
			break
		case 2:
			bot.telegram.deleteWebhook()
			console.log('done')
			rl.close()
			break
		case 3:
			bot.telegram.getWebhookInfo().then((data) => {
				console.log(data)
			})
			rl.close()
			break
	}
})
