export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
  }
  
  export interface Book {
    kind: string;
    id: string;
    volumeInfo: VolumeInfo;
  }
  
  export interface GoogleBooksResponse {
    kind: string;
    totalItems: number;
    items: Book[];
  }