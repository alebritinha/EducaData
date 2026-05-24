import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

//import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})

export class LoginComponent {

  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) {}

  login() {

    this.authService.login(this.email, this.senha)
      .subscribe({

        next: (resposta: any) => {
          console.log('Sucesso:', resposta);
        },

        error: (erro: any) => {
          console.log('Erro:', erro);
        }

      });

  }

}