import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
    readonly url = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getPokemon() {    
        return this.http.get(this.url + 'pokemon').map(response => <Pokemon[]>response);
    }

    deletePokemon(id: string) {
        //this.http.delete(this.url + 'pokemon/delete', {observe: 'body', }).map(response => console.log(response));
        console.log('fire');
        return this.http.request('DELETE', this.url + 'pokemon/remove', { body: { id: id} }).map(response => console.log(response));;
    }
}