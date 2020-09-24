import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaConsultaComponent } from './Pulsacion/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Pulsacion/persona-registro/persona-registro.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Pulsacion/menu/menu.component';

const routes: Routes = [
  {path: 'personaConsulta', component: PersonaConsultaComponent },
  {path: 'personaRegistro', component: PersonaRegistroComponent},
  {path: 'menu', component:MenuComponent}
  ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
