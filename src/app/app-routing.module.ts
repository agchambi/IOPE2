import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Colas1Component } from './Components/Colas1/colas1/colas1.component';
import { Colas2Component } from './Components/colas2/colas2.component';


const routes: Routes = [
  {path:'index', component: AppComponent},
  {path:'Modelo1', component: Colas1Component},
  {path:'Modelo2', component: Colas2Component},
  {path: '',redirectTo:'/Modelo1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
