import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Voo } from '../models/voo';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VooService {
  url = 'http://localhost:3000/voos'; // api rest fake
  constructor(private httpClient: HttpClient
    ) { }
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  
    // Obtem todos os voos
    getVoos(): Observable<Voo[]> {
      return this.httpClient.get<Voo[]>(this.url)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }
  
    // Obtem um voo pelo id
    getVooById(id: number): Observable<Voo> {
      return this.httpClient.get<Voo>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
    // salva um voo
    saveVoo(voo: Voo): Observable<Voo> {
      return this.httpClient.post<Voo>(this.url, JSON.stringify(voo), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
    // utualiza um voo
    updateVoo(voo: Voo): Observable<Voo> {
      return this.httpClient.put<Voo>(this.url + '/' + voo.id, JSON.stringify(voo), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
  
    // deleta um voo
    deleteVoo(voo: Voo) {
      return this.httpClient.delete<Voo>(this.url + '/' + voo.id, this.httpOptions)
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
