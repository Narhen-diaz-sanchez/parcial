import { Component, OnInit } from '@angular/core';
import { ConsumoService } from './core/services/consumo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'parcial';
  
  constructor(private consumoService: ConsumoService){
    console.log('el componente funciona');
  }

  ngOnInit(): void{
    console.log('el componente se inicio');
    this.consumoService.getUsers().subscribe(response => console.log(response));
  }

}
