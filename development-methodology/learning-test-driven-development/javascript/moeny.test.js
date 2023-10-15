import assert from 'assert'
import test from 'node:test'

class Money {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }
}

let fiver = new Money(5)
let tenner = fiver.times(2)

test('tenner should return 10', t => {
    assert.strictEqual(tenner.amount, 10)
})

let tenEuros = new Money(10, "EUR")
let twentyEuros = tenEuros.times(2)
assert.strictEqual(twentyEuros.amount, 20)
assert.strictEqual(twentyEuros.currency, "EUR")
