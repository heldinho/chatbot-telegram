require('dotenv/config')
const emojiUnicode = require('emoji-unicode')
const toEmoji = require('emoji-name-map')
const TelegramBot = require('node-telegram-bot-api')
const Helpers = require('./helpers')
const Http = require('./services/api')

const Token = require('./env.json').token

const bot = new TelegramBot(Token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match[1]
  bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, analyze(msg.text))
})

const emoji = {
  one: toEmoji.get(':one:'),
  two: toEmoji.get(':two:'),
  three: toEmoji.get(':three:')
}
function analyze(msg) {
  switch (msg) {
    case '1':
      return 'Saldo disponível: ' + Helpers.numberToReal(parseFloat('50000.00'))
    case '2':
      return (
        'Sem movimentação no momento.' +
        Http.ConsoleLog('Teste de action', { nome: 'Helder Passos', idade: 30 })
      )
    case '3':
      return `Brigado por consultar nossos atendimento via chat bot.`
    default:
      return `Escolha uma das Opções:
  ${emoji['one']} - Saldo

  ${emoji['two']} - Extrato

  ${emoji['three']} - Sair
      `
  }
}
