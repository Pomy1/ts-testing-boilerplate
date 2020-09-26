export default class FizzBuzz {

    FIZZ = 'Fizz'
    BUZZ = 'Buzz'
    FIZZBUZZ = this.FIZZ+this.BUZZ
    GREATERTHAN100 = "No puede ser mayor que 100"

    
    fizzBuzz(num: number) : string {

        let response = "";
        if(this.isDivisibleByThree(num) || this.containsThree(num))response = this.FIZZ
        if(this.isDivisibleByFive(num) || this.containsFive(num))response = this.BUZZ
        if(this.isDivisibleByThree(num) && this.isDivisibleByFive(num))response = this.FIZZBUZZ
        if(num>100) response = this.GREATERTHAN100
        return response
    }

    isDivisibleByThree(numToCheck: number): boolean {
        return (numToCheck%3 == 0)
    }

    isDivisibleByFive(numToCheck: number): boolean {
        return (numToCheck%5 == 0)
    }

    containsThree(numToCheck: number): boolean {
        return (numToCheck.toString().includes('3'))
    }

    containsFive(numToCheck: number): boolean {
        return (numToCheck.toString().includes('5'))
    }


}
