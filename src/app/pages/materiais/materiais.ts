import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-materiais',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './materiais.html',
  styleUrl: './materiais.scss'
})

export class MateriaisComponent {

  modalAberto = false;

  arquivoSelecionado!: File;

  materiais = [

    {
      id: 1,
      titulo: 'Frações - Introdução',
      disciplina: 'Matemática',
      tipo: 'PDF',
      data: '10/05/2024'
    },

    {
      id: 2,
      titulo: 'Vídeo: Equações do 1º Grau',
      disciplina: 'Matemática',
      tipo: 'Vídeo',
      data: '09/05/2024'
    }

  ];

  novoMaterial = {

    titulo: '',
    disciplina: '',
    tipo: 'PDF'

  };

  abrirModal() {

    this.modalAberto = true;

  }

  fecharModal() {

    this.modalAberto = false;

  }

  onFileSelected(event: any) {

    this.arquivoSelecionado =
      event.target.files[0];

  }

  salvarMaterial() {

    const novo = {

      id: this.materiais.length + 1,

      titulo: this.novoMaterial.titulo,

      disciplina: this.novoMaterial.disciplina,

      tipo: this.novoMaterial.tipo,

      data: new Date().toLocaleDateString()

    };

    this.materiais.push(novo);

    this.fecharModal();

    this.novoMaterial = {

      titulo: '',
      disciplina: '',
      tipo: 'PDF'

    };

  }

  editar(material: any) {

    alert(
      'Editar material: ' + material.titulo
    );

  }

  deletar(id: number) {

    this.materiais =
      this.materiais.filter(
        material => material.id !== id
      );

  }

}
