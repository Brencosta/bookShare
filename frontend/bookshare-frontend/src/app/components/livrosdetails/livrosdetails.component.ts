import { Component, inject } from '@angular/core';
import { Livro } from '../../models/livro';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-livrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './livrosdetails.component.html',
  styleUrl: './livrosdetails.component.css'
})
export class LivrosdetailsComponent {
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor() {
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findbyId(id);
    }
   }
  livro: Livro = new Livro();
  findbyId(id: number) {
    // buscar no bacnk end
  }



save() {
  //fazer deoiis pra salvar
  alert('Livro salvo com sucesso!');

 }

delete() {
  //fazer deoiis pra excluir
  Swal.fire({
  title: 'sucesso!',
  text: 'Livro excluído com sucesso!',
  icon: 'success',
  confirmButtonText: 'OK'
})
  alert('Livro excluído com sucesso!'); }
 

editar() {
  //fazer deoiis pra editar
  alert('Livro editado com sucesso!'); }


  
}
 
 