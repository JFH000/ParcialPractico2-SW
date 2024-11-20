import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Conferencia } from './conferencia';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Conferencia[]> {
    return this.http.get<Conferencia[]>(this.apiUrl);
  }
}

