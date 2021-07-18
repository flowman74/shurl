import fs from 'fs'

const json = (file: string) => {
  const filePath = fs.readFileSync(file)
  const fileContent = JSON.parse(filePath.toString())
  return {
    set: (key: string, value: string) => {
      fileContent[key] = value
      fs.writeFileSync(file, JSON.stringify(fileContent))
    },
    get: (key: string) => {
      return fileContent[key]
    },
  }
}

export default json
