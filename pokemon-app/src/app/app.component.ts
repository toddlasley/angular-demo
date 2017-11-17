import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger(
    'openClose',
    [
      state('closed', style({height: '0px', display: 'none'})),
      state('opened', style({height: '*'})),
      transition( 'closed <=> opened', [animate(500, style({height: '50px'})), animate(500)])
    ]
  )]
})
export class AppComponent {
  title = 'Pokemon App';
  pokemon: Pokemon[];
  stateExpression: string;

  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    this.pokemonService.getPokemon()
      .subscribe(result => this.pokemon = result);
  }

  toggleOpenClose() {
    if (this.stateExpression == 'closed') {
      this.stateExpression = 'opened';
    } else {
      this.stateExpression = 'closed';
    }
  }
}
