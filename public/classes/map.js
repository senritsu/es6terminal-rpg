'use strict';

var PossibleNames = [
    "old ruins",
    "rolling plains",
    "a simple road",
    "a winding road",
    "a river",
    "a bridge",
    "a small hut"
]

var PossibleExits = ['north', 'south', 'east', 'west']

const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

class Map {
    constructor() {
        this.current = this.getRandomLocation()
        this.openExits = 1
        this.generate(this.current)
    }

    getRandomLocation() {
        return new Location(PossibleNames[randInt(0, PossibleNames.length)])
    }

    generate(location) {
        if (location.generated) return

        this.openExits -= 1

        for (var i = 0; i < PossibleExits.length; i++) {
            const exit = PossibleExits[i]
            if (location.exits[exit]) continue

            if (this.openExits === 0) {
                console.log('overriding exit generation')
            }

            if (Math.random() < 0.3 || this.openExits === 0) {
                const newLocation = this.getRandomLocation()
                location.link(exit, newLocation)
                this.openExits += 1
            }
        }
        location.generated = true
        console.log(`map now has ${this.openExits} open exits`)
    }

    move(newLocation) {
        this.current = newLocation
        this.generate(this.current)
    }
}
