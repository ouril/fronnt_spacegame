import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

interface Auth {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService{

  constructor(private http: HttpClient) {
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
}
