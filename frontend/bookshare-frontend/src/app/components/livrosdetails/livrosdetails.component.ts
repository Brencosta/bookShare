import { Component, OnInit, inject } from '@angular/core';
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
    const id = Number(this.route.snapshot.params['id']);
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.livroService.findbyid(id).subscribe({
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
    alert('Deseja salvar as alterações?');}
    edit() {
    alert('Deseja editar o livro?');}



}