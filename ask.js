module.exports = [{
        type: 'confirm',
        name: 'private',
        message: 'ths resgistery is private?',
    },
    {
        type: 'input',
        name: 'author',
        message: 'author name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'input project description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose a license?',
        choices: ['ISC']
    },
]