import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemonList: Pokemon[] = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      id: 2,
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      id: 3,
      name: "Venusaur",
      types: ["Grass", "Poison"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      id: 4,
      name: "Charmander",
      types: ["Fire"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      id: 5,
      name: "Charmeleon",
      types: ["Fire"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      id: 6,
      name: "Charizard",
      types: ["Fire", "Flying"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      id: 7,
      name: "Squirtle",
      types: ["Water"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      id: 8,
      name: "Wartortle",
      types: ["Water"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      id: 9,
      name: "Blastoise",
      types: ["Water"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      id: 10,
      name: "Caterpie",
      types: ["Bug"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
      id: 11,
      name: "Metapod",
      types: ["Bug"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
      id: 12,
      name: "Butterfree",
      types: ["Bug", "Flying"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
      id: 13,
      name: "Weedle",
      types: ["Bug", "Poison"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
      id: 14,
      name: "Kakuna",
      types: ["Bug", "Poison"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
      id: 15,
      name: "Beedrill",
      types: ["Bug", "Poison"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
      id: 16,
      name: "Pidgey",
      types: ["Normal", "Flying"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
      id: 17,
      name: "Pidgeotto",
      types: ["Normal", "Flying"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
      id: 18,
      name: "Pidgeot",
      types: ["Normal", "Flying"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
      id: 19,
      name: "Rattata",
      types: ["Normal"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
      id: 20,
      name: "Raticate",
      types: ["Normal"],
      region: "Kanto",
      imageUrl: "https://pokeapi.co/api/v2/pokemon/20/"
    }
  ];

  pokedex$!: Observable<Pokemon[]>;

  constructor() {
    // this.pokedex$ = new Observable<Pokemon[]>((subscriber) => subscriber.next(this.pokemon));
  }

  getAllPokemon(): Observable<Pokemon[]> {
    return of(this.pokemonList);
  }

  getPokemonByType(type: string): Observable<Pokemon[]> {
    return of(this.pokemonList).pipe(
      map(
        (pokemonList: Pokemon[]) => pokemonList.filter(
          (pokemon: Pokemon) => pokemon.types.some(
            (pokeType: string) => pokeType.toLowerCase() === type.toLowerCase()
          )
        )
      )
    );
  }

  getPokemonByTypePromise(type: string): Promise<Pokemon[]> {
    return new Promise((resolve, reject) => {
      let data = this.pokemonList.filter(
        (pokemon: Pokemon) => pokemon.types.some(
          (pokeType: string) => pokeType.toLowerCase() === type.toLowerCase()
        )
      );

      if(data.length > 0) 
        resolve(data);
      else 
        reject("No pokemon found!");
    });
  }

}
