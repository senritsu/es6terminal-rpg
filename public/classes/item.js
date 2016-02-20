'use strict';

var ItemSlots = ['weapon', 'armor', 'trinket']

class Item {
    constructor(name) {
        this.name = name
        this.value = 0
        this.slot = 'trinket'
        this.stats = new Stats()
    }
}
