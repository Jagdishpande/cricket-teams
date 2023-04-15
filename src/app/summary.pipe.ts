import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'sumary'
})
export class summarypipe implements PipeTransform{
    // transform(value: string, limit?:number):string {
    //     let neLimit=limit?limit:50
    //     return value.slice(0,neLimit)+'....'
    // }
    transform(value:string, limit:number=50):string {
        return value.slice(0,limit)+'...'
    }
}




