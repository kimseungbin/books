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
    divide(divisor) {
        return new Money(this.amount / divisor, this.currency)
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

let originalMoney = new Money(4002, "KRW")
let actualMoneyAfterDivision = originalMoney.divide(4)
let expectedMoneyAfterDivision = new Money(1000.5, "KRW")
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision)