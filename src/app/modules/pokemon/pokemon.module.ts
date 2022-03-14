import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonRoutingModule } from './pokemon-routeing.module';
@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
