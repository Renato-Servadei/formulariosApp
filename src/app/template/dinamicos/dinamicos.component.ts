import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent  {


  guardar() {
    console.log("formulario posteado")
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

nuevoJuego: string = '';
persona : Persona = {
  nombre: "roberto",
  favoritos: [{id: 1, nombre : "Manic Miner"}, {id: 2, nombre: 'Highway Encounter'}]
}
}
