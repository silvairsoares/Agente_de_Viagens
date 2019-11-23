import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Reserva } from '../models/reserva';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url = 'http://localhost:3000/reservas'; // api rest fake
  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os reservas
  getReservas(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um reserva pelo id
  getReservaById(id: number): Observable<Reserva> {
    return this.httpClient.get<Reserva>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um reserva
  saveReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.post<Reserva>(this.url, JSON.stringify(reserva), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um reserva
  updateReserva(reserva: Reserva): Observable<Reserva> {
    return this.httpClient.put<Reserva>(this.url + '/' + reserva.id, JSON.stringify(reserva), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um reserva
  deleteReserva(reserva: Reserva) {
    return this.httpClient.delete<Reserva>(this.url + '/' + reserva.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
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