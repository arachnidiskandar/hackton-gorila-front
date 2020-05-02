import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Pergunta {
  descricao: string;
  alternativas: [];
  tipoPergunta?: number;
  id: number;
}
@Injectable({
  providedIn: 'root'
})

export class PerguntasService {

  constructor(private http: HttpClient) { }

  getPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>('https://localhost:44345/api/pergunta/getperguntas');
    return of();
  }
}
