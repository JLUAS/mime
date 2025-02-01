import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mime';
  nombre: string = '';  // Variable para almacenar el input
  esNombreValido: boolean | null = null; // Variable para mostrar el resultado
  numPag:number = 1
  surpristeToggle:boolean=false
  validarNombre() {
    this.esNombreValido = this.nombre.trim().toLowerCase() === 'raabta';
  }
  add(){
    this.numPag = this.numPag + 1
  }
  sub(){
    if(this.numPag=1){
      this.numPag=1
    }else{
      this.numPag = this.numPag -1
    }
  }
  surprise(){
    this.surpristeToggle=true
  }
}
