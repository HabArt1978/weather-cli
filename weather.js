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

const initCLI = () => {
  const args = getArgs(process.argv)

  if (args.h) {
    printHelp()
  }
  if (args.s) {
    // сохранить город
  }
  if (args.t) {
    return saveToken(args.t)
  }
  getWeather("москва")
  // вывести погоду
}

initCLI()
