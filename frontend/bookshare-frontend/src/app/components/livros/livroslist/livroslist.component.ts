import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Livro } from '../../../models/livro';

@Component({
  selector: 'app-livroslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './livroslist.component.html',
  styleUrl: './livroslist.component.css'
})
export class LivroslistComponent {
  lista: Livro[] = []
  deleteLivro(id: number) {
    if(!confirm('Tem certeza que deseja deletar este livro?')) {
      let indice =  this.lista.findIndex(livro => livro.id === id);
   this.lista.splice(indice, 1);
  
    alert('Livro deletado com sucesso!');
  }

}
}