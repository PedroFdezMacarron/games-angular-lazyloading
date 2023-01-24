import { Component } from '@angular/core';
import { MemoryService } from './services/memory.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {
  scoreBoard:any;
  gameBoard?:any[];

  rows:number[] = new Array(3);
  cols:number[] = new Array(4);

  constructor(private memoryService: MemoryService) {}
  ngOnInit(){   
    
    this.rows[0]=0;
    this.cols[0]=0;


    this.gameBoard = this.memoryService.getCards();
    this.scoreBoard=this.memoryService.getScore(this.gameBoard);
  }

  showScoreBoard(){
    this.scoreBoard=this.memoryService.getScore(this.gameBoard);
  }

  jugar(card:any){
    console.log("jugar");
    this.memoryService.playCard(card.id,this.gameBoard);
    this.scoreBoard=this.memoryService.getScore(this.gameBoard);
  }


}
