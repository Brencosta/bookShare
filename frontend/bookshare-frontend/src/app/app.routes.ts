import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LivrolistComponent } from './components/livrolist/livrolist.component';

export const routes: Routes = [
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", component: LivrolistComponent},    
    {path: "livros", component: LivrolistComponent}
];
