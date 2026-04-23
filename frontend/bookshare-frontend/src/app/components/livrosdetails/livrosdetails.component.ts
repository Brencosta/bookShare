import { Component } from '@angular/core';
import { Livro } from '../../models/livro';

@Component({
  selector: 'app-livrosdetails',
  imports: [],
  templateUrl: './livrosdetails.component.html',
  styleUrl: './livrosdetails.component.css'
})
export class LivrosdetailsComponent {

  livro: Livro = new Livro();
save() {
  //fazer deoiis pra salvar
  alert('Livro salvo com sucesso!'); }


}
