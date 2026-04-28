import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
http = inject(HttpClient); // requisação asssincrona, ou seja, não bloqueia a execução do código  
API = 'http://localhost:8080/api/livraria';
  constructor() { }

  findaall(): Observable <Livro[]> {
    return this.http.get<Livro[]>(this.API + "/findall");
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/delete/${id}`);
  }
  
  findbyid(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.API}/findbyid/${id}`);
  }
  save(livro: Livro): Observable<string> {
    return this.http.post<string>(this.API + "/salvar", livro);
  }
  update(livro: Livro, id: number): Observable<string> {
    return this.http.put<string>(`${this.API}/update/${id}`, livro);
  }
  findbyId(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.API}//findbyid/{id}`);
  }
}
