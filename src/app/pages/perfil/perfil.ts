// perfil.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './perfil.html',

  styleUrls: ['./perfil.scss']
})

export class PerfilComponent {

  usuario = {
    nome: 'Mariana',
    email: 'mariana.souza@escola.edu.br'
  };

  fotoPreview: string | ArrayBuffer | null = null;

  salvarAlteracoes(): void {

    console.log('Alterações salvas');

  }

  alterarSenha(): void {

    console.log('Alterar senha');

  }

  onFileSelected(event: any): void {

    const file = event.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onload = () => {

        this.fotoPreview = reader.result;

      };

      reader.readAsDataURL(file);

    }

  }

}