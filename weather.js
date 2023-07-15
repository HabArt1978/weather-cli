#!/usr/bin/evt node
import { getArgs } from "./helpers/args.js"

const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(args)
  switch (args) {
    case args.h:
      // вывести helpers
      break
    case args.s:
      // сохранить город
      break
    case args.t:
      // сохранить токен
      break

    default:
    // вывести погоду
  }
}

initCLI()
