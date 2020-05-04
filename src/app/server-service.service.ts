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

  stopTurn() {
    const token = this.cookieService.get('auth-token');
    console.log(token);
    const headersData: HttpHeaders = new HttpHeaders();
    headersData.append('Accept', 'application/json');
    headersData.append('Authorization', `Bearer ${token}`);
    // console.log('---------------------' + headers);

    return this.http.post('http://127.0.0.1:8000/api/rpc/', {
      method: 'turn',
      params: {
        game_name: 'some',
        turn_act: 2
      },
      id: 1
    }, {
      headers: {
        authorization : `JWT ${token}`,
        accept: 'application/json'
      }
    });
  }
}
