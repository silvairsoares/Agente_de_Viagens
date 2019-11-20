import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pagamento } from '../models/pagamento';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  url = 'http://localhost:3000/pagamentos'; // api rest fake
  constructor(private httpClient: HttpClient
    ) { }
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  
    // Obtem todos os pagamentos
    getPagamentos(): Observable<Pagamento[]> {
      return this.httpClient.get<Pagamento[]>(this.url)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }
  
    // Obtem um pagamento pelo id
    getPagamentoById(id: number): Observable<Pagamento> {
      return this.httpClient.get<Pagamento>(this.url + '/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
    // salva um pagamento
    savePagamento(pagamento: Pagamento): Observable<Pagamento> {
      return this.httpClient.post<Pagamento>(this.url, JSON.stringify(pagamento), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
    // utualiza um pagamento
    updatePagamento(pagamento: Pagamento): Observable<Pagamento> {
      return this.httpClient.put<Pagamento>(this.url + '/' + pagamento.id, JSON.stringify(pagamento), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
  
    // deleta um pagamento
    deletePagamento(pagamento: Pagamento) {
      return this.httpClient.delete<Pagamento>(this.url + '/' + pagamento.id, this.httpOptions)
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
