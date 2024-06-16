import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../app/services/google-books.services';
import { Book } from './book.model';
import { GoogleBooksResponse } from './google-books-response.model';

@Component({
  selector: 'app-book-search',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Buscar Livros</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-input type="text" [(ngModel)]="query"></ion-input>
      <ion-button (click)="searchBooks()">Buscar</ion-button>
      <ion-list>
        <ion-item *ngFor="let book of books">
          {{ book.volumeInfo.title }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class BookSearchPage implements OnInit {

  query = '';
  books: Book[] = [];

  constructor(private googleBooksService: GoogleBooksService) { }

  ngOnInit() {
  }

  searchBooks() {
    this.googleBooksService.searchBooks(this.query).subscribe((response : any) => {
        const googleBooksResponse = response as GoogleBooksResponse;
        this.books = googleBooksResponse.items;
  });

//Caso o de cima não funcione, substitua ele por:
//searchBooks() {
//    this.googleBooksService.searchBooks(this.query).subscribe((response: any) => {
//        this.books = response.items;
//      });

}}