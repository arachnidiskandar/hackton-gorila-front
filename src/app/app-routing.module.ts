import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPerguntaComponent } from './components/cadastro-pergunta/cadastro-pergunta.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'cadastro', component: CadastroPerguntaComponent },
  { path: 'questionario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }