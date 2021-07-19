import fs from 'fs'

const json = (path: string) => {
  const fileContent = JSON.parse(fs.readFileSync(path).toString())
  return {
    set: (key: string, value: string) => {
      fileContent[key] = value
      fs.writeFileSync(path, JSON.stringify(fileContent))
    },
    get: (key: string) => {
      return fileContent[key]
    },
  }
}

export default json
