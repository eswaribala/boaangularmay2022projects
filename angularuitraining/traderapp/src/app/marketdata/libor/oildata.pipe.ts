import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oildataFilter'
})
export class OildataPipe implements PipeTransform {

  transform(value: any, arg:number) {
    return value.filter((data:any)=>data[1]<=arg);
  }

}
