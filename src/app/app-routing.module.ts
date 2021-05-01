import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicoverComponent } from './dicover/dicover.component';

const routes: Routes = [
  {path : 'discover', component: DicoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
