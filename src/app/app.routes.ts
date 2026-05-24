import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { CadastroComponent } from './pages/cadastro/cadastro';
import { HomeComponent } from './pages/home/home';
import { MateriaisComponent } from './pages/materiais/materiais';
import { DetalhesMaterialComponent } from './pages/detalhes-material/detalhes-material';
import { PerfilComponent } from './pages/perfil/perfil';
import { QuestionariosComponent } from './pages/questionarios/questionarios';
import { CriarQuestionarioComponent } from './pages/criar-questionario/criar-questionario';
import { IndicadoresComponent } from './pages/indicadores/indicadores';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },
   {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'materiais',
    component: MateriaisComponent
  },

  {
    path: 'material/:id',
    component: DetalhesMaterialComponent
  },

  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'questionarios',
    component: QuestionariosComponent
  },
  {
    path: 'questionarios/criar',
    component: CriarQuestionarioComponent
  },
  {
    path: 'indicadores',
    component: IndicadoresComponent
  }

];