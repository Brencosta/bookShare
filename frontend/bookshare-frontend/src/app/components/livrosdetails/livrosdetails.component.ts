import { Component, OnInit, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../models/livro';
import { LivroService } from '../../services/livro.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livrosdetails',
  standalone: true,
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.css'],
  imports: [ FormsModule, CommonModule]
})
export class LivrosdetailsComponent implements OnInit {

  livro: Livro = new Livro();
  

  route = inject(ActivatedRoute);
  router = inject(Router);
  livroService = inject(LivroService);

 ngOnInit(): void {

  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.livroService.findbyId(Number(id)).subscribe({
      next: (response) => {
        this.livro = response;
      },
      error: (err) => {
        console.error("Erro ao buscar livro", err);
      }
    });
  }

}

  findById(id: number) {
    this.livroService.findbyId(id).subscribe({
      next: (livro: Livro) => {
        this.livro = livro;
      },
      error: () => {
        Swal.fire('Erro!', 'Livro não encontrado.', 'error');
      }
    });
  }

  delete() {
    alert('Deseja excluir o livro?');}

  

  save() {  
  if (this.livro.id > 0) {
    this.livroService.update(this.livro, this.livro.id).subscribe({
      next: () => {
        Swal.fire('Sucesso!', 'Livro atualizado com sucesso.', 'success');
      }
    });
  } else {
    this.livroService.save(this.livro).subscribe({
      next: () => {
        Swal.fire('Sucesso!', 'Livro salvo com sucesso.', 'success');
        this.router.navigate(['/admin/livros']);
      }
    });
  }} }