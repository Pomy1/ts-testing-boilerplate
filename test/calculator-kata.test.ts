import Calculator from '../src/calculator'

describe('CalculatorAdd', () => {
    const calculator = new Calculator()

    it('should string empty', () => {
        expect(calculator.add('')).toEqual(0)
    })
    it('should single number', () => {
        expect(calculator.add('1')).toEqual(1)
    })
    it('should add two numbers', () => {
        expect(calculator.add('1,2')).toEqual(3)
        expect(calculator.add('7,29')).toEqual(36)
        expect(calculator.add('700,29')).toEqual(729)
    })
    it('should add more than two numbers', () => {
        expect(calculator.add('700,29,1')).toEqual(730)
        expect(calculator.add('700,29,1,5')).toEqual(735)
    })

})