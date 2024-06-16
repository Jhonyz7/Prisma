import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private apiKey = 'AIzaSyDT1hf8F-5le-PpjWEv_e0jVdDmgwdVAa4';
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }
  getRandomBooks(): Observable<any> {
    const params = new HttpParams()
     .set('q', 'stephen king')
     .set('maxResults', '40');

    return this.http.get(this.apiUrl, { params: params });
  }

  searchBooks(query: string, startIndex: number = 0, maxResults: number = 40): Observable<any> {
    const params = new HttpParams()
      .set('q', query) // Make sure query is a valid search query
      .set('startIndex', startIndex.toString()) // Make sure startIndex is a valid number
      .set('maxResults', maxResults.toString());
  
    return this.http.get(this.apiUrl, { params: params });
  }

  getBook(volumeId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.apiUrl}/${volumeId}`;
    return this.http.get(url, { headers });
  }

}