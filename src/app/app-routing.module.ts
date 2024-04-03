import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JatekosokComponent } from './jatekosok/jatekosok.component';
import { TippekComponent } from './tippek/tippek.component';

const routes: Routes = [
  {path:"", redirectTo:"/jatekosok", pathMatch:'full'},
  {path:"jatekosok", component:JatekosokComponent},
  {path:"tippek", component:TippekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
