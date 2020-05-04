import { Component, OnInit } from '@angular/core';
import { Pergunta, PerguntasService, Alternativa } from 'src/app/shared/perguntas/perguntas.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pergunta',
  templateUrl: './cadastro-pergunta.component.html',
  styleUrls: ['./cadastro-pergunta.component.scss']
})
export class CadastroPerguntaComponent implements OnInit {
  heroes: Array<string> = [];
  perguntaDescricao = '';
  explicacao = '';
  pergunta: Pergunta = {
    alternativas: [],
    descricao: '',
    explicacao: '',
    id: 0,
    tipoPergunta: 0,
  };
  alternativa: Alternativa = {
    descricao: '',
    id: 0,
    idPergunta: 0
  };
  alternativas: Array<Alternativa> = [];
  controlChexboxes = new FormControl();
  constructor(private perguntaService: PerguntasService) { }

  ngOnInit() {
  }
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
      this.alternativa.descricao = newHero;

      this.alternativas.push(this.alternativa)
    }
    for (let i = 0; i< this.heroes.length; i++) {
      this.alternativa.descricao
    }
  }

  submitPergunta() {
    this.pergunta.descricao = this.perguntaDescricao;
    this.pergunta.explicacao = this.explicacao;
    this.perguntaService.inserePerguntas(this.pergunta).subscribe();
  }
}
