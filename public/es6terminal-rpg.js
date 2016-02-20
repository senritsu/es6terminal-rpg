

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

const handler = (input) => {
    if(input == 'help') { return terminal.writeLine(helpString) }
    else { return 'Command not recognized.' }
}

terminal.startInteractive({handler})
