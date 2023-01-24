import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoiswhoComponent } from './whoiswho.component';

const routes: Routes = [
  {path:'',component:WhoiswhoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoiswhoRoutingModule { }
