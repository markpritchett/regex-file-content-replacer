const argv = require('yargs').argv;
const fs = require('fs');
const glob = require("glob");

if (!argv.settings) {
    console.error('Please supply a path to a json file containing the settings');
    return;
}

let settings;

fs.readFile(argv.settings, (error, contents) => {
    if (error) {
        throw error;
    }

    settings = JSON.parse(contents);

    settings.forEach(setting => {
        replace(setting);
    });
});

function replace(setting) {
    setting.filePatterns.forEach(filePattern => {
        glob(filePattern, {}, (error, files) => {
            files.forEach(file => {
                fs.readFile(file, 'utf8', (error, contents) => {
                    if (error) {
                        console.error(error);
                        return;
                    }

                    let newContents = contents;

                    setting.replacements.forEach(replacement => {
                        newContents = newContents.replace(replacement.find, replacement.replaceWith);
                    });

                    if (newContents !== contents) {
                        fs.writeFile(file, newContents, 'utf8', error => {
                            if (error) {
                                console.error(error);
                            }
                        });
                    }
                });
            });
        });
    });
}