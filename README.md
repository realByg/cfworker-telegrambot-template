# 🤖 cfworker-telegrambot-template
### Host your Telegram bot on Cloudflare workers

#### 🏃‍♀️ Setup
1. Install [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) and login with your Cloudflare account.
    ```
    $ npm i @cloudflare/wrangler -g
    ```
2. Install [ngrok](https://dashboard.ngrok.com/get-started/setup)  for local port forwarding.

#### 🎴 Getting started
1. Generate your project and install the dependencies.
    ```
    $ wrangler generate my-project https://github.com/zayabighead/cfworker-telegrambot-template --type=webpack
    $ npm i
    ```
2. Rename `bot.config.example.js` to `bot.config.js` and setup your bot configuration.
    ```
    // bot.config.js
    module.exports = {
	token: '', //get your bot token from @botfather
	webhook: {
		    host: '', // https://your.subdomain.workers.dev
		    path: '/', // a random string
	    },
    }
    ```
3. Rename `wrangler.example.toml` to `wrangler.toml` and setup your wrangler configuration.

#### 👉 Development
1. Run `npm run ngrok` to start ngrok local port forwrading. Copy the ngrok URL to `webhook.host` in `bot.config.js` .
2. Run `npm run webhook:set` to set the webhook for the bot.
3. Run `npm run dev` to start `wrangler dev`.

#### 📢 Deployment
1. Set your Cloudflare worker subdomain in `webhook.host` in `bot.config.js` .
2. Run `npm run webhook:set` to set the webhook for the bot.
3. Run `npm run publish` to publish to a Cloudflare worker.

#### 🤨 Limitations
* Some node modules like `fs` won't be available
* Currently only supports `telegraf@3.x`
* Other runtime limitations for Cloudflare workers: https://developers.cloudflare.com/workers/runtime-apis/web-standards

#### 📘 Useful docs
* Cloudflare workers doc: https://developers.cloudflare.com/workers/
* wrangler: https://developers.cloudflare.com/workers/cli-wrangler
* ngrok: https://dashboard.ngrok.com/get-started/tutorials
* telegraf: https://telegraf.js.org/v3#/
* cfworker-middware-telegraf: https://github.com/Tsuk1ko/cfworker-middware-telegraf