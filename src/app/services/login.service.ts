import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/insertAccount`, userData);
  }

  validateAccount(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validateAccount`, { emailaccount: email, passaccount: password });
  }

  listAccounts(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.apiUrl}/getAccounts`);
  }

  deleteAccount(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/deleteAccount/${id}`);
  }


}
