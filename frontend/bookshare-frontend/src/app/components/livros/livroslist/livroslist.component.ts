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

}
