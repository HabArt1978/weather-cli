#!/usr/bin/evt node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printHelp, printSuccess, printError } from "./services/log.service.js"
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"

const saveToken = async token => {
  if (!token.length) {
    printError("Не передан token!")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess("Token сохранён")
  } catch (error) {
    printError(error.message)
  }
}

const getForcast = async () => {
  try {
    // пока город будем генерить во временной переменной окружения CITY
    const weather = await getWeather(process.env.CITY)
    console.log(weather)
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Неверно указан город")
    } else if (error?.response?.status === 401) {
      printError("Неверно указан token")
    } else {
      printError(error.message)
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)

  console.log(process.env) // вывод всех переменных окружения

  if (args.h) {
    printHelp()
  }
  if (args.s) {
    // сохранить город
  }
  if (args.t) {
    return saveToken(args.t)
  }
  getForcast()
  // вывести погоду
}

initCLI()
