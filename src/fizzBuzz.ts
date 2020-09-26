export default class FizzBuzz {

    FIZZ:string = 'Fizz'
    BUZZ:string = 'Buzz'
    FIZZBUZZ:string = this.FIZZ+this.BUZZ
    GREATERTHAN100:string = "No puede ser mayor que 100"

    
    fizzBuzz(num: number) : string {

        let response: string = num.toString();
        if(this.isDivisibleByThree(num) || this.containsThree(num)) response = this.FIZZ
        if(this.isDivisibleByFive(num) || this.containsFive(num)) response = this.BUZZ
        if(this.isDivisibleByThreeAndFive(num)) response = this.FIZZBUZZ
        if(num>100) response = this.GREATERTHAN100
        return response
    }

    fizzBuzzAll() : string[] {
        return Array(100).fill(1).map((num,index) => this.fizzBuzz(index+1))
    }

    isDivisibleByThreeAndFive(numToCheck: number): boolean {
        return this.isDivisibleByThree(numToCheck) && this.isDivisibleByFive(numToCheck)
    }

    isDivisibleByThree(numToCheck: number): boolean {
        return this.module(numToCheck,3)
    }

    isDivisibleByFive(numToCheck: number): boolean {
        return this.module(numToCheck,5)
    }

    module(numToCheck: number,divisible: number): boolean {
        return (numToCheck%divisible == 0)
    }

    containsThree(numToCheck: number): boolean {
        return this.containsString(numToCheck,'3')
    }

    containsFive(numToCheck: number): boolean {
        return this.containsString(numToCheck,'5')
    }

    containsString(numToCheck:number,text:string) : boolean {
        return (numToCheck.toString().includes(text))
    }


}
