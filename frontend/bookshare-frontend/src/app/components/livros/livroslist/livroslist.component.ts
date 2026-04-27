import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-livroslist',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.css'],
  
})

export class LivroslistComponent implements OnInit {
  

  lista: Livro[] = [];
   router = inject(ActivatedRoute);
  router2 = inject(Router);
livroservice = inject(LivroService);

  ngOnInit(): void {
    this.findaall();
  }

  findaall() {
    this.livroservice.findaall().subscribe({
      next: (livros: Livro[]) => {
        this.lista = livros;
      },
      error: () => {
        Swal.fire('Erro!', 'Erro ao buscar livros.', 'error');
      }
    });
  }

  deleteLivro(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação não poderá ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.livroservice.delete(id).subscribe(() => {
          this.lista = this.lista.filter(livro => livro.id !== id);
          Swal.fire('Excluído!', 'Livro removido com sucesso.', 'success');
        });
      }
    });
  }


}