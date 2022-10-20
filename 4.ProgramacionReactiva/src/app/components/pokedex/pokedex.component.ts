import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  allPokemon$: Observable<Pokemon[]> = this.pokedexService.getAllPokemon();
  poisonPokemon: Pokemon[] = [];
  poisonPokemonSubscription: Subscription;
  normalPokemon: Pokemon[] = [];

  constructor(
    private pokedexService: PokedexService
  ) { 
    this.poisonPokemonSubscription = pokedexService.getPokemonByType('poison').subscribe({
      next: (pokemonList: Pokemon[]) => this.poisonPokemon = pokemonList,
      error: (error: any) => console.log(error)
    });

    pokedexService.getPokemonByTypePromise('normal')
      .then((pokemonList: Pokemon[]) => this.normalPokemon = pokemonList)
      .catch((error) => console.log(error));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.poisonPokemonSubscription.unsubscribe();
  }

}
