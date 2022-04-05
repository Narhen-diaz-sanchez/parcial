import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios'
import { ConsumoService } from '../../services/consumo.service'

@Component({
  selector: 'app-cparcial',
  templateUrl: './cparcial.component.html',
  styleUrls: ['./cparcial.component.scss']
})
export class CparcialComponent implements OnInit {

  lista: Usuarios[]=[];

  constructor(
    private _servicio:ConsumoService
  ) { }

  ngOnInit(): void {
    this._servicio.getUsers().subscribe(
      req =>{
        this.lista = req
      },
      err =>{
        var mensaje = err.error();
        console.log(mensaje)
      }
    );
  }

}
