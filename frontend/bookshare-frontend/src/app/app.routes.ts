import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './components/livrosdetails/livrosdetails.component';
import { MenuComponent } from './components/layout/menu/menu.component';


export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {path:"login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children:[
    {path: "livros", component: LivroslistComponent  }]},
    {path:"livros/new", component: LivrosdetailsComponent},
    {path:"livros/edit/:id", component: LivrosdetailsComponent},
    {path: 'menu' , component: MenuComponent }
];
