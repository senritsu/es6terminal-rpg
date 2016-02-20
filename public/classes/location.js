'use strict';

var ExitPairs = {
    north: 'south',
    south: 'north',
    east: 'west',
    west: 'east'
}

class Location {
    constructor(name) {
        this.generated = false
        this.name = name
        this.exits = {}
        this.loot = []
        this.enemies = []
    }

    link(exit, otherLocation) {
        this.exits[exit] = otherLocation
        otherLocation.exits[ExitPairs[exit]] = this
    }

    get description() {
        let desc = `You are at ${this.name}.\n`
        for(let exit in this.exits) {
            desc += `To the ${exit} you see ${this.exits[exit].name}.\n`
        }
        for(let item of this.loot) {
            desc += `There is a ${item.name} on the ground.\n`
        }
        for(let enemy of this.enemies) {
            desc += `A ${enemy.name} stares at you menacingly.\n`
        }
        return desc.substring(0, desc.length-1)
    }
}
