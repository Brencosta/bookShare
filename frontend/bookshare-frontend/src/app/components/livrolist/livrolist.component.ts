import { Component } from '@angular/core';
import { Livro } from '../../models/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livrolist',
  imports: [CommonModule],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.css'
})
export class LivrolistComponent {
  lista: Livro[] = [];
  constructor() {
    let livro1: Livro = new Livro();
    livro1.id = 1;
    livro1.genero = "Ficção Científica";
    livro1.titulo = "Duna";
    livro1.autor = "Frank Herbert";
    this.lista.push(livro1);
    let livro2: Livro = new Livro();
    livro2.id = 2;
    livro2.genero = "Fantasia";
    livro2.titulo = "O Senhor dos Anéis";
    livro2.autor = "J.R.R. Tolkien";
    this.lista.push(livro2);
    let livro3: Livro = new Livro();
    livro3.id = 3;
    livro3.genero = "Mistério";
    livro3.titulo = "O Código Da Vinci";
    livro3.autor = "Dan Brown";
    this.lista.push(livro3);
    let livro4: Livro = new Livro();
    livro4.id = 4;
    livro4.genero = "Romance";
    livro4.titulo = "Orgulho e Preconceito";
    livro4.autor = "Jane Austen";
    this.lista.push(livro4);
  }


}
