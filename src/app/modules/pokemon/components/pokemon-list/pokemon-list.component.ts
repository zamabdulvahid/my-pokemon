import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { RestService } from 'src/app/modules/core/services/rest.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemons = [];
  subscriptions: Subscription[] = [];

  constructor(private http: RestService, private router: Router) { }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

  getPokemons(): void {
    this.subscription = this.http.getData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').subscribe(response => {
      response.results.forEach((pokemon, index) => {
        this.subscription = this.http.getData(pokemon.url).subscribe(result => {
          response.results[index].data = result;
        });
      });
      this.pokemons = response.results;
      console.log('pokemons', this.pokemons);
    });
  }

  showPokemonDetails(): void {
    this.router.navigate(['./pokemon/detail']);
  }

}
