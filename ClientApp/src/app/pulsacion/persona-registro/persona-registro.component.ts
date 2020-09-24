import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona;
  }

  add(){
    this.persona.pulsacion = this.CalcularPulsacion();
    alert(' Se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

  CalcularPulsacion(): number{
    return (this.persona.sexo == "masculino")? (210 - this.persona.edad)/10 : (220 - this.persona.edad)/10; 
  }
}
