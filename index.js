const { promisify } = require('util')
const fs = require('fs')
const { argv } = require('yargs')
const glob = require("glob")

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)
const globAsync = promisify(glob)

const loadFile = async (filename) => {
    return await readFileAsync(filename, { encoding: 'utf8' })
}

const replace = async setting => {
    setting.filePatterns.forEach(async filePattern => {
        let files = await globAsync(filePattern, {})

        files.forEach(async file => {
            let contents = await loadFile(file)

            let newContents = contents

            setting.replacements.forEach(replacement => {
                newContents = newContents.replace(new RegExp(replacement.find, 'g'), replacement.replaceWith)
            })

            if (newContents !== contents) {
                console.log(`Applying replacements to ${file}`)
                await writeFileAsync(file, newContents, 'utf8')
            } else {
                console.log(`No matches detected in ${file}`)
            }
        })
    })
}

const replaceAsync = promisify(replace)

const app = async () => {
    if (!argv.settings) {
        console.error('Please supply a path to a json file containing the settings')
        return
    }

    try {
        let settings = JSON.parse(await loadFile(argv.settings))

        settings.forEach(async setting => {
            await replaceAsync(setting)
        })

        console.log('Completed')
    }
    catch (e) {
        console.error(e)
    }
}

app()