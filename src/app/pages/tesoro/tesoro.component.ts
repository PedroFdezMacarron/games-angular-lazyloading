import { Component, OnInit } from '@angular/core';
import { TesoroService } from './services/tesoro.service';

@Component({
  selector: 'app-tesoro',
  templateUrl: './tesoro.component.html',
  styleUrls: ['./tesoro.component.scss'],
})
export class TesoroComponent implements OnInit {
  gameBoard?: any[] = [];
  rows: number = 2;
  cols: number = 3;
  randomRow:number=0;
  randomCol:number=0;
  treasure: boolean = false;
  win: boolean = false;
  shots: number = 0;

  nuevoArray?: any[] = [];

  play(row: number, col: number) {
    if (this.win) {      
      return;
    } else {
      this.shots++;
      this.gameBoard![row][col].clicked = true;
      if (this.gameBoard![row][col].treasure) {
        this.win = true;
      }
    }
  }

  init(){
    console.log("init");
    this.shots=0;
    this.win=false;
    this.randomRow = Math.floor(Math.random() * this.rows);
    this.randomCol = Math.floor(Math.random() * this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (row === this.randomRow && col === this.randomCol) {
          this.treasure = true;
        } else {
          this.treasure = false;
        }
        this.gameBoard![row][col] = {
          x: row,
          y: col,
          treasure: this.treasure,
          clicked: false,
        };
      }
    }
  }

  constructor(private tesoroService: TesoroService) {}

  ngOnInit() {
    this.shots = 0;
    //Declaramos el array bidimensional
    this.nuevoArray![0] = new Array(2);
    this.nuevoArray![1] = new Array(2);
    //Metemos un dato en cada posición
    this.nuevoArray![0][0] = 25;
    this.nuevoArray![0][1] = 12;
    this.nuevoArray![1][0] = 34;
    this.nuevoArray![1][1] = 6;

    for (let row = 0; row < this.rows; row++) {
      this.gameBoard![row] = [];
    }
    console.log(this.gameBoard);

    this.init();

    // for (let row = 0; row < this.rows; row++) {
    //   for (let col = 0; col < this.cols; col++) {
    //     if (row === this.randomRow && col === this.randomCol) {
    //       this.treasure = true;
    //     } else {
    //       this.treasure = false;
    //     }
    //     this.gameBoard![row][col] = {
    //       x: row,
    //       y: col,
    //       treasure: this.treasure,
    //       clicked: false,
    //     };
    //   }
    // }

    console.log(this.gameBoard);

    // this.gameBoard = this.tesoroService.getTablero(4,4);
  }
}

// export interface GameBoard{board:Coords[][]};

// export interface Coords{treasure:boolean;clicked:boolean};
