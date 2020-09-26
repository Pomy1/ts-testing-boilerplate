export default class Calculator {

    DELIMITORCOMMA:string = ','
    DELIMITORNEWLINE:string = '/n'

    add(list: string): number {
        if(list === '')return 0
        return this.convertStringToArrayListByDelimitor(list,this.DELIMITORCOMMA).reduce(
            (sum:number,num:string) => sum+parseInt(num,10),
            0
        )
    }

    removeNewLines(list:string): string {
        return list.replace(this.DELIMITORNEWLINE,'')
    }

    convertStringToArrayListByDelimitor(list:string,delimitor:string) : string[]{
        return this.removeNewLines(list).split(delimitor)
    }
}