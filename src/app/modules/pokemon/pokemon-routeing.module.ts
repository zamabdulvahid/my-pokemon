import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PokemonWrapperComponent } from './components/pokemon-wrapper/pokemon-wrapper.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [{
  path: '',
  children: [
    {
    path: '',
    component: PokemonWrapperComponent
    },
    {
      path: 'list',
      component: PokemonListComponent
    },
    {
      path: 'detail',
      component: PokemonDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule {}
