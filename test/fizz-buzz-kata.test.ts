import FizzBuz from './../src/fizzBuzz'

describe('FizzBuz', () => {
    const fizzBuzz = new FizzBuz()

    it('should be Fizz if number contains 3', () => {
        expect(fizzBuzz.fizzBuzz(6)).toEqual(fizzBuzz.FIZZ);
        expect(fizzBuzz.fizzBuzz(13)).toEqual(fizzBuzz.FIZZ);
        expect(fizzBuzz.fizzBuzz(93)).toEqual(fizzBuzz.FIZZ);
    })

    it('should be Buzz if number is divisible of 5', () => {
        expect(fizzBuzz.fizzBuzz(5)).toEqual(fizzBuzz.BUZZ);
        expect(fizzBuzz.fizzBuzz(10)).toEqual(fizzBuzz.BUZZ);
        expect(fizzBuzz.fizzBuzz(85)).toEqual(fizzBuzz.BUZZ);
    })

    it('should be 1 if is one', () => {
        expect(fizzBuzz.fizzBuzz(1)).toEqual("1");
    })

    it('should be 1 if is one', () => {
        expect(fizzBuzz.fizzBuzz(7)).toEqual("7");
    })

    it('should be FizzBuzz if number is divisible of 3 and 5', () => {
        expect(fizzBuzz.fizzBuzz(15)).toEqual(fizzBuzz.FIZZBUZZ);
    })

    

})

describe('FizzBuzAll', () => {
    const fizzBuzz = new FizzBuz()
    it('should be and array and comprobate', () => {
        console.log(fizzBuzz.fizzBuzzAll())
        expect(fizzBuzz.fizzBuzzAll()).toHaveLength(100);
        expect(fizzBuzz.fizzBuzzAll()[2]).toEqual(fizzBuzz.FIZZ);
        expect(fizzBuzz.fizzBuzzAll()[4]).toEqual(fizzBuzz.BUZZ);
    })
})
