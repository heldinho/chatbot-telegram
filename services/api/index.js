const Axios = require('axios')

const local = 'http://localhost/api/'
const serve = 'http://api.atvbk.me/api/v1/'

const Api = Axios.create({
  baseURL: serve
})

const Login = (action, data) => {
  return Api.post(`accounts.php?action=${action}`, data)
}

const CreateAccount = (action, data) => {
  return Api.post(`accounts.php?action=${action}`, data)
}

const ShowBalance = (action) => {
  const data = {
    token: localStorage.getItem('tokenSys')
  }
  return Api.post(`accounts.php?action=${action}`, data)
}

const ShowExtractAccount = (action) => {
  const data = {
    token: localStorage.getItem('tokenSys')
  }
  return Api.post(`accounts.php?action=${action}`, data)
}

const TransferAmount = (action, data) => {
  const _data = {
    token: localStorage.getItem('tokenSys'),
    ...data
  }
  return Api.post(`accounts.php?action=${action}`, _data)
}

const ConsoleLog = (action, data) => {
  return action + data
}

module.exports = {
  Api,
  Login,
  CreateAccount,
  ShowBalance,
  ShowExtractAccount,
  TransferAmount,
  ConsoleLog
}
