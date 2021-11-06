import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecipes } from '../models/forkify.model';

@Injectable({
  providedIn: 'root'
})
export class ForkifyService {
  url = 'https://forkify-api.herokuapp.com/api';

  constructor(
    private http: HttpClient
  ) {}

  search(q: string): Observable<IRecipes> {
    const params = new HttpParams().set('q', q);

    return this.http.get<IRecipes>(this.url + '/search', { params });
  }

  details(rId: string): Observable<any> {
    const params = new HttpParams().set('rId', rId);

    return this.http.get<any>(this.url + '/get', { params })
  }
}