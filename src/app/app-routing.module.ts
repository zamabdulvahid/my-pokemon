import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonModule } from './modules/pokemon/pokemon.module';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: '/pokemon/list',
      pathMatch: 'full'
    },
    {
      path: 'pokemon',
      loadChildren: () => import('./modules/pokemon/pokemon.module').then(module => module.PokemonModule)
    },
    {
      path: '**',
      redirectTo: 'pokemon/list'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
