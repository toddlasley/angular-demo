import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
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
  @Input() pokemon: Pokemon;

  constructor() { 
    this.stateExpression = 'closed'
  }

  toggleOpenClose() {
    if (this.stateExpression == 'closed') {
      this.stateExpression = 'opened';
    } else {
      this.stateExpression = 'closed';
    }
  }
}
