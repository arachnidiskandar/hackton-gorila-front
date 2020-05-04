import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Pergunta {
  descricao: string;
  explicacao: string;
  alternativas: [];
  tipoPergunta?: number;
  id: number;
}

export interface Resposta {
  idPergunta: number;
  descricao: string[];
  id: number;
}

export interface Alternativa {
  descricao: string;
  idPergunta: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class PerguntasService {

  constructor(private http: HttpClient) { }

  getPerguntas(): Observable<Pergunta[]> {
    return this.http.get<Pergunta[]>('https://localhost:44345/api/pergunta/getperguntas');
  }

  inserePerguntas(pergunta: Pergunta): Observable<Pergunta> {
    return this.http.post<Pergunta>('https://localhost:44345/api/pergunta/Insere', pergunta);
  }
  enviarRepostas(respostas) {
    return this.http.post('https://localhost:44345/api/pergunta/Respostas', respostas);
  }
}
