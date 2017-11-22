import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  animations: [trigger(
    'openClose',
    [
      state('closed', style({height: '0px'})),
      state('opened', style({height: '*'})),
      transition( 'closed <=> opened', [animate(500, style({height: '50px'})), animate(500)]),
    ]
  )]
})
export class PokemonDetailComponent {
  stateExpression: string;
  expandBtnLbl: string;  
  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.stateExpression = 'closed';
    this.expandBtnLbl = 'More';
  }

  toggleOpenClose() {
    if (this.stateExpression == 'closed') {
      this.stateExpression = 'opened';
      this.expandBtnLbl = 'Less';
    } else {
      this.stateExpression = 'closed';
      this.expandBtnLbl = 'More';
    }
  }

  deletePokemon() {
    console.log('click');
    this.pokemonService.deletePokemon(this.pokemon._id).subscribe(result => result);
  }
}
