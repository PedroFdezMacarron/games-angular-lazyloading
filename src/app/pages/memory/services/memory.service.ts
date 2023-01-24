import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { forEach, forEachRight } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  cards?:any[]=[];
  finish:boolean=false;
  jugada:number=0;
  anterior_jugada:number=-1;
  score:number = 0;
  attempts:number = 0;
  scoreBoard?:any;

  constructor() { }


  getScore(gameBoard:any){

    this.finish=true;

     for (let index = 0; index < gameBoard.length; index++) {
      const element = gameBoard[index];      
        if(!gameBoard![index].fixed){
          this.finish = false;
          break;    
        }      
      }

    

    return this.scoreBoard={
      finish:this.finish,
      score:this.score,
      attempts:this.attempts
    }
  }

  limpia=(index:number,gameBoard:any)=>{
    console.log('limpia',index)
    gameBoard[index].selected=false;       
    this.jugada=0;    
  }
  
  limpia2=(index:number,gameBoard:any)=>{
    console.log('limpia',index)
    gameBoard[index].selected=false;       
    this.jugada=0;    
    this.anterior_jugada=-1
  }


  getCards(){
    this.cards = [
      {
        id: 1,
        name: "earth",      
        img: "../../../assets/exercise-1/earth.svg",
      },
      {
        id: 2,
        name: "jupiter",
        img: "../../../assets/exercise-1/jupiter.svg",
      },
      {
        id: 3,
        name: "mars",
        img: "p../../../assets/exercise-1/mars.svg",
      },
      {
        id: 4,
        name: "mercury",
        img: "../../../assets/exercise-1/mercury.svg",
      },
      {
        id: 5,
        name: "saturn",
        img: "../../../assets/exercise-1/saturn.svg",
      },
      {
        id: 6,
        name: "uranus",
        img: "p../../../assets/exercise-1/uranus.svg",
      },
      {
        id: 7,
        name: "earth",
        img: "../../../assets/exercise-1/earth.svg",
      },
      {
        id: 8,
        name: "jupiter",
        img: "../../../assets/exercise-1/jupiter.svg",
      },
      {
        id: 9,
        name: "mars",
        img: "../../../assets/exercise-1/mars.svg",
      },
      {
        id: 10,
        name: "mercury",
        img: "../../../assets/exercise-1/mercury.svg",
      },
      {
        id: 11,
        name: "saturn",
        img: "p../../../assets/exercise-1/saturn.svg",
      },
      {
        id: 12,
        name: "uranus",
        img: "../../../assets/exercise-1/uranus.svg",
      },
    ];

    // amplia las propiedades del array
  //   for (let index = 0; index < this.cards.length; index++) {
  //     let element = this.cards[index];
  //     element.selected = false;
  //     element.fixed = false;        
  // }

      // desordena el array
      this.cards = _.shuffle(this.cards);
      for (let index = 0; index < this.cards.length; index++) {
        const element = this.cards[index];
        element.id=index;        
      }
      return this.cards;

      // return  this.cards;

  }

  playCard = (index:number,gameBoard:any) =>{
    console.log("anterior juagada",this.anterior_jugada);
    this.jugada++;
    if(this.jugada>2){
        // alert("sólo se pueden jugar dos cartas");
        return;
    }
    if(this.jugada===2){      
      this.attempts++;        
        if(gameBoard[index].name === gameBoard[this.anterior_jugada].name){                           
            gameBoard[index].fixed = true;
            gameBoard[this.anterior_jugada].fixed = true;
            this.score++;
            this.anterior_jugada=-1;          
            this.jugada=0;          
        }else{
            gameBoard[index].selected=true; 
            setTimeout(()=>this.limpia(index,gameBoard), 500);  // espera 0.52 segundos.         
            setTimeout(()=>this.limpia2(this.anterior_jugada,gameBoard), 500);  // espera 0.52 segundos.         
            // gameBoard[index].selected=false;                          
            // this.anterior_jugada=-1;
        }
        
    }else{
        // primera carta jugada    
        gameBoard[index].selected = true;
        this.anterior_jugada = index;
        
        
    }
    
  }

}
