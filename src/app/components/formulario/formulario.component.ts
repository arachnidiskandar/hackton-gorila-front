import { Component, OnInit } from '@angular/core';
import { PerguntasService, Pergunta } from 'src/app/shared/perguntas/perguntas.service';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  comecar: boolean;
  perguntas: Pergunta[];
  perguntasForm: FormArray;
  constructor(private perguntasService: PerguntasService) {
    // this.perguntasForm. = this.fb.group({
    //   // teste: this.fb.array([this.createItem()])
    // });
   }

  ngOnInit() {
    this.perguntasService.getPerguntas().subscribe(perguntas => {
      console.log(perguntas);
      this.perguntas = perguntas;
    });
  }
}
