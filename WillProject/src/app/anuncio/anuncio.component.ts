import { Component, OnInit, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Anuncio } from '../Models/Anuncio';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal, public anuncio: Anuncio) {}

  ngOnInit(): void {
    this.cargarDatos;
  }

 cargarDatos(datosanuncio:Anuncio){
   this.anuncio.titulo = datosanuncio.titulo;
   this.anuncio.imagen = datosanuncio.imagen;
   this.anuncio.descripcion = datosanuncio.descripcion;
   console.log("desde component Anuncio:" + datosanuncio.titulo)
    this.anuncio = datosanuncio;
 }
}
