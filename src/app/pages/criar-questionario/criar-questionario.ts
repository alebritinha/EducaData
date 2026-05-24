import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-criar-questionario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './criar-questionario.html',
  styleUrls: ['./criar-questionario.scss']
})
export class CriarQuestionarioComponent {

  titulo = '';
  disciplina = '';
  descricao = '';

  perguntas: any[] = [];

  adicionarPergunta() {

    this.perguntas.push({

      texto: '',

      opcao1: 'Sim',
      valor1: 1,

      opcao2: 'Mais ou menos',
      valor2: 2,

      opcao3: 'Não',
      valor3: 3
    });
  }

  removerPergunta(index: number) {

    this.perguntas.splice(index, 1);
  }

}
