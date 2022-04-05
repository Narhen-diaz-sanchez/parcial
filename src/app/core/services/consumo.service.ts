import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios'

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  url;

 
  constructor(private _http: HttpClient) {
    this.url = "https://gorest.co.in/public/v2/users";
   }

  getUsers(){
    return this._http.get<Usuarios[]>(this.url);  }
}