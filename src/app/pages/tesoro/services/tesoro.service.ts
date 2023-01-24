import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesoroService {
array?:any[]=[];
  constructor() { }

  getTablero(rows:number,cols:number) {

    let totCells:number=rows*cols;

    for (let index = 0; index < totCells; index++) {
      this.array![index]={clicked:false,treasure:false}
    }
   
    console.log(this.array);
    return this.array;    

  }
}
