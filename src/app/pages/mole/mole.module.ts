import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoleRoutingModule } from './mole-routing.module';
import { MoleComponent } from './mole.component';


@NgModule({
  declarations: [
    MoleComponent
  ],
  imports: [
    CommonModule,
    MoleRoutingModule
  ]
})
export class MoleModule { }
