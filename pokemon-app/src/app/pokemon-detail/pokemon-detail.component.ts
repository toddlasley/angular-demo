import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import {animate, state, style, transition, trigger, AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  animations: [
    trigger(
      'openClose',
      [
        state('closed', style({height: '0px', padding: '0'})),
        state('opened', style({height: '*'})),
        transition( 'closed <=> opened', [animate(500, style({height: '50px'})), animate(500)]),
      ]
    ),
    trigger(
      'delete',
      [
        state('deleted', style({display: 'none'})),
        transition( '* => deleted', animate(500, style({height: '0px'}))),
      ]
    )
  ]
})
export class PokemonDetailComponent {
  stateExpression: string;
  deletedExpression: string;
  expandBtnLbl: string;  
  @Input() pokemon: Pokemon;
  @Output() deleted = new EventEmitter<Pokemon>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.stateExpression = 'closed';
    this.deletedExpression = '';
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
    this.pokemonService.deletePokemon(this.pokemon._id).subscribe(result => {
      
      if(result.status == 200) {
        this.deletedExpression = 'deleted';        
      }
    });
  }

  deleteDone(event: AnimationEvent) {
    if(event.toState == 'deleted'){
      this.deleted.emit(this.pokemon);
    }    
  }
}
