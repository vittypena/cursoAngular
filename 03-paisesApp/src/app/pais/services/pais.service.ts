import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { RESTCountriesResponse, Idd } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais(termino: string): Observable<RESTCountriesResponse[]>{//RESTCountriesResponse[] con [] porque queremos que regrese un arrego de pais no un pais
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<RESTCountriesResponse[]>(url);
  }

  buscarCapital(termino: string): Observable<RESTCountriesResponse[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<RESTCountriesResponse[]>(url);
  }

  getPaisPorCodigo(id: string): Observable<RESTCountriesResponse>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<RESTCountriesResponse>(url);
  }

  buscarRegion( region: string): Observable<RESTCountriesResponse[]>{
    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<RESTCountriesResponse[]>(url);
  }
}
