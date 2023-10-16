import assert from 'assert'
import { describe, it } from 'node:test'

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


describe('Money', () => {
    it('should return 10 dollars', () => {
        let fiveDollars = new Money(5, 'USD')
        let tenDollars = new Money(10, 'USD')
        assert.deepStrictEqual(fiveDollars.times(2), tenDollars)
    })

    it('should return 20 euros', () => {
        let tenEuros = new Money(10, 'EUR')
        let twentyEuros = new Money(20, 'EUR')
        assert.deepStrictEqual(tenEuros.times(2), twentyEuros)
    })

    it('should return 1000.5 won', () => {
        let originalMoney = new Money(4002, 'KRW')
        let actualMoneyAfterDivision = originalMoney.divide(4)
        assert.deepStrictEqual(actualMoneyAfterDivision, new Money(1000.5, 'KRW'))
    })
})

describe('Portfolio', () => {
    it('should return evaluated value of portfolio', () => {
        let fifteenDollars = new Money(15, 'USD')
        let portfolio = new Portfolio()
        portfolio.add(new Money(5, 'USD'), new Money(10, 'USD'))
        assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars)
    })
})