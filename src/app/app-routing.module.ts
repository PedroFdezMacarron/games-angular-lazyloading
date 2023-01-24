import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];
const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'tesoro', loadChildren: () => import('./pages/tesoro/tesoro.module').then(m => m.TesoroModule)},
  {path: 'memory', loadChildren: () => import('./pages/memory/memory.module').then(m => m.MemoryModule)},
  {path: 'mole', loadChildren: () => import('./pages/mole/mole.module').then(m => m.MoleModule)},
  {path: 'whoiswho', loadChildren: () => import('./pages/whoiswho/whoiswho.module').then(m => m.WhoiswhoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
