import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes =[
  {path: '', component:HomeComponent,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contato', component:ContatoComponent},
]
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
