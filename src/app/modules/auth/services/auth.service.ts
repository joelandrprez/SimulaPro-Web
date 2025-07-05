import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '../models/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/v1/User`;; // cambia por tu endpoint real
  private tokenKey = '';

  constructor(private http: HttpClient) {}

  login(account:LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth`, account,{
      withCredentials: true
    }).pipe(
      tap((res: any) => {
        if (res.token) {
          sessionStorage.setItem(this.tokenKey, res.token);
        }
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
