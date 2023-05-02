import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemon: Pokemon = {} as Pokemon;

  constructor(private service: PokemonService) {}

  loadPokemon() {
    this.service.getPokemon().subscribe(
      {
        next: data => this.pokemon = data
      }
    );
  }

  

  

}
