import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ServerServiceService{

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getData() {
    const token = this.cookieService.get('auth-token');
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    return this.http.get('http://127.0.0.1:8000/api/games/', {headers});
  }

  auth(username: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/api/token/', {
      username,
      password
    });

  }
  refresh(callback): void{
    const token = this.cookieService.get('refresh-token');
    this.http.post('http://127.0.0.1:8000/api/refresh/', {token}).subscribe(
      (data: any) => {
        this.cookieService.set('auth-token', data.token);
        callback.apply();
      },
      error => {}
    );
  }

  stopTurn() {
    const token = this.cookieService.get('auth-token');
    console.log(token);

    return this.http.post('http://127.0.0.1:8000/api/rpc/', {
      method: 'turn',
      params: {
        game_name: 'some',
        turn_act: 2
      },
      id: 1
    }, {
      headers: {
        authorization : `Bearer ${token}`,
        accept: 'application/json'
      }
    });
  }
}
