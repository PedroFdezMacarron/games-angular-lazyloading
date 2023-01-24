import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesoroServiceService {
  boardGame?:any[]  
    constructor() { }

  getBoardGame(rows:number,cols:number){
    
    let totCells:number=rows*cols;

    for (let index = 0; index < totCells; index++) {
      this.boardGame![index]={clicked:false,treasure:false}
    }
    // pone el tesoro de forma aleatoria
    this.boardGame![Math.floor(Math.random() * (totCells))]={treasure:true};
    
    return this.boardGame;
  }


}
