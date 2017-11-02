import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pokemon = null;

  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    this.pokemon = this.pokemonService.getPokemon();
  }
}
