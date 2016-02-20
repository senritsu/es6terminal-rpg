'use strict';

const terminal = new Terminal('.terminal-host')

terminal.setTheme('amber')
terminal.writeLine('Welcome to the es6terminal rpg!')
terminal.writeLine('version 0.1.0')
terminal.writeLine('Type help to get a list of available commands')

const helpString = `
Commands:
look --- get information about your current location
go (north|east|south|west) --- change location
attack --- attack the first enemy present
loot --- take everything that you can
stats --- show your stats and equipment
`

const map = new Map()

const handler = (input) => {
    if(input == 'help') { return terminal.writeLine(helpString) }
    if(input == 'look') { return map.current.description }
    if(input.startsWith('go ')) {
        const exit = input.substring(3)
        const location = map.current.exits[exit]
        if (location) {
            map.move(location)
            return `You went to ${map.current.name}.`
        }
        else {
            return 'You cannot go there.'
        }
    }
    else { return 'Command not recognized.' }
}

terminal.startInteractive({handler})
