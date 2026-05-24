// cadastro.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.scss']
})
export class CadastroComponent {

  professora = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  cadastrar() {

    console.log('Cadastro realizado');

    console.log(this.professora);

  }

}