import { Component, OnInit } from '@angular/core';
import { PerguntasService, Pergunta, Resposta } from 'src/app/shared/perguntas/perguntas.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  comecar: boolean;
  perguntas: Pergunta[];
  grupoPerguntas = [];
  formPerguntas: FormGroup;
  pagina = 0;
  constructor(private perguntasService: PerguntasService, private fb: FormBuilder) {
    this.formPerguntas = this.fb.group({});
  }
  exibirMensagem = false;
  mensagem = '';
  ngOnInit() {
    this.perguntasService.getPerguntas().subscribe(perguntas => {
      this.perguntas = perguntas;
      perguntas.forEach(pergunta => {
        this.formPerguntas.addControl(pergunta.id.toString(), new FormControl('', Validators.required));
      });
      this.grupoPerguntas = this.separarPerguntas();
    });
  }
  separarPerguntas() {
    const chunkSize = 3;
    const arr = this.perguntas;
    const groups = arr.map((e, i) => {
        return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
    }).filter(e => e);
    return groups;
  }
  avancar() {
    if (this.pagina + 1 !== this.grupoPerguntas.length) {
      this.pagina++;
      this.exibirMensagem = false;
    } else {
      this.finalizar();
    }
  }
  finalizar() {
    const respostas = [];
    Object.keys(this.formPerguntas.value).forEach(key => {
      const resposta = {
        idPergunta: parseInt(key),
        descricoes: [this.formPerguntas.controls[key].value],
        id: 0
      };
      respostas.push(resposta);
    });
    this.perguntasService.enviarRepostas(respostas).subscribe(r=>{},error=>{},()=>{
      Swal.fire({
        title: 'Respostas Enviadas!',
        icon: 'success'
      })
    });
  }
  exibirExplicacao(indexPergunta: number) {
    this.exibirMensagem = !this.exibirMensagem;
    this.mensagem = this.grupoPerguntas[this.pagina][indexPergunta].explicacao;
  }
}
