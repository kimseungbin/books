import assert from 'assert'
import test from 'node:test'

class Dollar {
    constructor(amount) {
        this.amount = amount
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier)
    }
}

let fiver = new Dollar(5)
let tenner = fiver.times(2)
test('tenner should return 10', t => {
    assert.strictEqual(tenner.amount, 10)
})
