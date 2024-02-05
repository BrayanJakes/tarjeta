import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URI } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getCharacters(){
    return this.http.get(`${URI}/character`);
  }

}
