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

class Money {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }
}

let tenEuros = new Money(10, "EUR")
let twentyEuros = tenEuros.times(2)
assert.strictEqual(twentyEuros.amount, 20)
assert.strictEqual(twentyEuros.currency, "EUR")
