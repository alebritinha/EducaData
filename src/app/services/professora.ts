import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessoraService {

  private api = 'http://localhost:8080/professoras';

  constructor(private http: HttpClient) {}

  salvar(professora: any): Observable<any> {
    return this.http.post(this.api, professora);
  }

  listar(): Observable<any> {
    return this.http.get(this.api);
  }
}