'use strict';

class Stats {
    constructor() {
        this.atk = 0
        this.def = 0
        this.hp = 0
    }
}

class Entity {
    constructor(name) {
        this.name = name
        this.stats = new Stats()
    }
}
