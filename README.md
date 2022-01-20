# 🤖 `cfworker-telegrambot-template`
> Host your Telegram bot on Cloudflare workers

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
        webhookPath: '/wefwefwefe', // a random string
    }
    ```
3. Rename `wrangler.example.toml` to `wrangler.toml` and setup your wrangler configuration.

#### 👉 Development
> The main idea is to set up a local dev port and use ngrok to forward the port after setting the ngrok temporary url as the bot's webhook.
1. Run `npm run ngrok` to start ngrok local port forwrading.
2. Run `npm run webhook` to set the webhook for the bot.
3. Run `npm run dev` to start `wrangler dev`.

#### 📢 Deployment
1. Run `npm run webhook` to set the webhook for the bot.
2. Run `npm run publish` to publish to a Cloudflare worker.

#### 🤨 Limitations
* Some Node.js built-in modules won't be available, you can set webpack `node` option to use some of them.
    * available modules: https://github.com/webpack/node-libs-browser/blob/master/README.md
    * webpack configuration: https://v4.webpack.js.org/configuration/node/
* Other runtime limitations for Cloudflare workers: https://developers.cloudflare.com/workers/runtime-apis/web-standards

#### 📘 Useful docs
* __cfworker-middware-telegraf__: https://github.com/Tsuk1ko/cfworker-middware-telegraf
* Cloudflare workers doc: https://developers.cloudflare.com/workers/
* wrangler: https://developers.cloudflare.com/workers/cli-wrangler
* ngrok: https://dashboard.ngrok.com/get-started/tutorials
* telegraf: https://telegraf.js.org/v3#/