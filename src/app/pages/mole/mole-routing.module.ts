import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoleComponent } from './mole.component';

const routes: Routes = [
  {path:'',component:MoleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoleRoutingModule { }
