const getArgs = args => {
  const result = {}
  const [exec, file, ...rest] = args
  rest.forEach((val, idx, arr) => {
    if (val.charAt(0) === "-") {
      if (idx === arr.length - 1) {
        result[val.substring(1)] = true
      } else if (arr[idx + 1].charAt(0) !== "-") {
        result[val.substring(1)] = arr[idx + 1]
      } else {
        result[val.substring(1)] = true
      }
    }
  })

  return result
}

export { getArgs }
