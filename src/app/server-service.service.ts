import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ServerServiceService{

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getData() {
    return this.http.get('http://127.0.0.1:8000/games/');
  }

  auth(username: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/api-token-auth/', {
      username,
      password
    });

  }
  refresh(): void {
    const token = this.cookieService.get('auth-token');
    this.http.post('http://127.0.0.1:8000/api-token-refresh', {token}).subscribe(
      (data: any) => {
        this.cookieService.set('auth-token', data.token);
      },
      error => {}
    );
  }
}
