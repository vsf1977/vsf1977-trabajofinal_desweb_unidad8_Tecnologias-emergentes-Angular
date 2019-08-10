import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent },
  {path : 'main', component: MainComponent },
  {path : 'main/detalle', component: DetalleComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
