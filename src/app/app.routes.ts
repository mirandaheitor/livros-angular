import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', loadComponent: () => import('./livro-lista/livro-lista.component').then(m => m.LivroListaComponent) },
  { path: 'dados', loadComponent: () => import('./livro-dados/livro-dados.component').then(m => m.LivroDadosComponent) }
];
