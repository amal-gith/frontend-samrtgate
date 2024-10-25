import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = 'http://localhost:3000/settings'; // URL de votre API NestJS

  constructor(private http: HttpClient) {}

  encryptData(data: string, level: string): Observable<any> {
    const body = { data, level };
    return this.http.post(`${this.apiUrl}/encrypt`, body);
  }

  decryptData(encryptedData: string, level: string): Observable<any> {
    const body = { encryptedData, level };
    return this.http.post(`${this.apiUrl}/decrypt`, body);
  }
}
