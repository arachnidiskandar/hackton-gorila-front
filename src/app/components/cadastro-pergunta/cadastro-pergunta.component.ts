import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
 
  alternativas: Array<Alternativa> = [];
  controlChexboxes = '';
  @ViewChild('newHero', {static: null}) newHero: ElementRef;
  constructor(private perguntaService: PerguntasService) { }

  ngOnInit() {
  }
  addHero(newHero: string) {
    const alternativa: Alternativa = {
      descricao: '',
      id: 0,
      idPergunta: 0,
      tag: ''
    };
    if (newHero) {
      this.heroes.push(newHero);
      alternativa.tag = this.controlChexboxes;
      alternativa.descricao = newHero;
      this.newHero.nativeElement.value = '';
      this.alternativas.push(alternativa);
    }
    for (let i = 0; i< this.heroes.length; i++) {
      alternativa.descricao
    }
  }

  submitPergunta() {
    this.pergunta.descricao = this.perguntaDescricao;
    this.pergunta.explicacao = this.explicacao;
    this.pergunta.alternativas = this.alternativas;
    this.perguntaService.inserePerguntas(this.pergunta).subscribe();
  }
}
