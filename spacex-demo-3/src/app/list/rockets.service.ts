import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rocket } from './rocket.model';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  private url = 'https://api.spacexdata.com/v3/rockets';

  constructor(private http: HttpClient) { }

  getRockets(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(this.url);
  }
}
