import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { CadastroComponent } from './pages/cadastro/cadastro';


export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },
];