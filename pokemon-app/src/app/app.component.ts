import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'Pokemon App';
  pokemon: Pokemon[];

  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    this.pokemonService.getPokemon()
      .subscribe(result => this.pokemon = result);
  }  
}
