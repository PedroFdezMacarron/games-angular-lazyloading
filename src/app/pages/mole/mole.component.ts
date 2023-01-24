import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.scss']
})
export class MoleComponent implements OnInit {
  gameBoard?: any[] = [];
  rows: number = 3;
  cols: number = 3;
  shots: number = 0;
  nuevoArray?: any[] = [];
  randomRow:number=0;
  randomCol:number=0;
  mole: boolean = false;
  secondsLeft:number = 30 ;
  lastPosition:any;
  yourScore:number=0;

  ngOnInit() {
    for (let row = 0; row < this.rows; row++) {
      this.gameBoard![row] = [];
    }
    this.init();      
  
    // llama a la fucnión jugar
    this.aJugar(this.secondsLeft,this.lastPosition);
  }


init(){
  this.randomRow = Math.floor(Math.random() * this.rows);
  this.randomCol = Math.floor(Math.random() * this.cols);
  for (let row = 0; row < this.rows; row++) {
    for (let col = 0; col < this.cols; col++) {
      if (row === this.randomRow && col === this.randomCol) {
        this.mole = true;
      } else {
        this.mole = false;
      }
      this.gameBoard![row][col] = {
        x: row,
        y: col,
        mole: this.mole,
        clicked: false,
      };
    }
  }

}

aJugar = async (secondsLeft:any,lastPosition:any)=>{        
  this.secondsLeft -= 1;
  
  // saca un aposición aleatoria entre 0 y 8 sin repetir
  let position = Math.ceil(Math.random()*8);
  while (position===lastPosition) {
      position = Math.ceil(Math.random()*8);
  }
  lastPosition=position;


  // pone todos tapados
  this.init() 
  

  // saca el mole en la posición aleatoria
  

  // si queda tiempo sigue el juego
  if(secondsLeft>0){
      setTimeout(()=>this.aJugar(this.secondsLeft,this.lastPosition),900);
  }else{
      
  }
}



golpe(row:number,col:number){  
  if(this.gameBoard![row][col].mole){
    this.gameBoard![row][col].mole=false;
    this.randomRow = Math.floor(Math.random() * this.rows);
    this.randomCol = Math.floor(Math.random() * this.cols);
    this.gameBoard![this.randomRow][this.randomCol].mole=false;
    this.yourScore++;
  }
}

}
