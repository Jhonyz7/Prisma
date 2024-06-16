import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../services/google-books.services';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  livros: any[] = [];
  searchQuery!: string;
  startIndex: number = 0;
  paletteToggle = false;
  

  constructor(private googleBooksService: GoogleBooksService, private authService: AuthService, private router: Router, private http: HttpClient) { }

  
  ngOnInit(): void {
    this.googleBooksService.getRandomBooks().subscribe((response: any) => {
      this.livros = response.items;
    });
  }

  sairDoApp() {
    App.exitApp();
  }
  
  searchBooks(): void {
    this.googleBooksService.searchBooks(this.searchQuery).subscribe((response: any) => {
      this.livros = response.items;
    });
  }

  async signout() {
    try {
      await this.authService.signOut();
      this.router.navigate(['login']);
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  }

  loadMore(event: any) {
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchQuery}&startIndex=${this.startIndex}&maxResults=10`)
    .subscribe((response: any) => {
      if (response && response.items && response.items.length > 0) { // <--- Add this null check
        this.livros = [...this.livros, ...response.items];
        this.startIndex += 10;
        event.target.complete();
      } else {
        event.target.disabled = true; // disable the infinite scroll
      }
    });
    }
}