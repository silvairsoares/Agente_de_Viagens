import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Viagem } from '../models/viagem';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  url = 'http://localhost:3000/viagens'; // api rest fake
  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  get(): Observable<Viagem[]> {
    return this.httpClient.get<Viagem[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getById(id: number): Observable<Viagem> {
    return this.httpClient.get<Viagem>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  save(viagem: Viagem): Observable<Viagem> {
    return this.httpClient.post<Viagem>(this.url, JSON.stringify(viagem), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  update(viagem: Viagem): Observable<Viagem> {
    return this.httpClient.put<Viagem>(this.url + '/' + viagem.id, JSON.stringify(viagem), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  delete(viagem: Viagem) {
    return this.httpClient.delete<Viagem>(this.url + '/' + viagem.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}