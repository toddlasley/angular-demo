import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
    constructor(private http: HttpClient) { }

    getPokemon() {    
        return this.http.get('http://localhost:8080/pokemon').map(response => <Pokemon[]>response);
    }
}