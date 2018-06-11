import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

@Injectable()
export class PokemonService {
    readonly url = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getPokemon() {    
        return this.http.get(this.url + 'pokemon').map(response => <Pokemon[]>response);
    }

    deletePokemon(id: string): Observable<HttpResponse<any>> {        
        return this.http.request('DELETE', this.url + 'pokemon/remove', { body: { id: id}, observe: 'response', responseType: 'text'});
    }
}