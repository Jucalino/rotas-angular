import { NgModule } from "@angular/core";

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursosGuard } from "./guards/cursos.guard";
import { AuthGuard } from "./guards/auth.guard";
// import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
// import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
// import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes: Routes = [
    { path: 'cursos',
     loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
     canActivate: [AuthGuard],
     canActivateChild: [CursosGuard],
     canLoad: [AuthGuard]
    },
    { path: 'alunos',
     loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
     canActivate: [AuthGuard],
     canActivateChild: [AlunosGuard],
     canLoad: [AuthGuard]
    },
    { path: 'home', component: HomeComponent,
     canActivate: [AuthGuard] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {path: '**', component: PaginaNaoEncontradaComponent}
    // { path: 'cursos', component: CursosComponent  },
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}