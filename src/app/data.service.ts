import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://pixabay.com/api/?key=40549253-3f104bf78d85284b0b06b3882&q=yellow+flowers&image_type=photo&pretty=true';

  constructor(private http: HttpClient) {}
  getPixabays() {
    return this.http.get(this.apiUrl);
  }
}
