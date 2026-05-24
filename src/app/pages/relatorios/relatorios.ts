import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './relatorios.html',
  styleUrls: ['./relatorios.scss']
})
export class RelatoriosComponent {
  arquivoSelecionado: File | null = null;
  graficoGerado = false;

  dadosGrafico = [
    {
      titulo: 'Pergunta 1',
      pergunta: 'Você entendeu o conteúdo sobre frações?',
      respostas: [
        { opcao: 'Sim', valor: 24 },
        { opcao: 'Mais ou menos', valor: 5 },
        { opcao: 'Não', valor: 2 }
      ]
    },
    {
      titulo: 'Pergunta 2',
      pergunta: 'Você gostou da aula de hoje?',
      respostas: [
        { opcao: 'Gostei muito', valor: 18 },
        { opcao: 'Gostei', valor: 10 },
        { opcao: 'Mais ou menos', valor: 2 },
        { opcao: 'Não gostei', valor: 1 }
      ]
    },
    {
      titulo: 'Pergunta 3',
      pergunta: 'As atividades com pizza e chocolate ajudaram você a aprender melhor?',
      respostas: [
        { opcao: 'Sim', valor: 3 },
        { opcao: 'Um pouco', valor: 4 },
        { opcao: 'Não', valor: 3 }
      ]
    }
  ];

  selecionarArquivo(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.arquivoSelecionado = input.files[0];
      this.graficoGerado = false;
    }
  }

  gerarGrafico() {
    if (!this.arquivoSelecionado) {
      alert('Selecione um arquivo PDF primeiro.');
      return;
    }

    this.graficoGerado = true;
  }
}