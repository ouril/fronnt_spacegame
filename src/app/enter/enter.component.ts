import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ServerServiceService} from '../server-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  loginData = '';
  pass = '';

  constructor(private serverServiceService: ServerServiceService, private cookieService: CookieService, private router: Router) {
  }



  ngOnInit(): void {
    const token = this.cookieService.get('auth-token');
    if (token != null && token !== ''){
      this.router.navigate(['/main']);
    }
  }

  login(){

    this.serverServiceService.auth(this.loginData, this.pass).subscribe(
      (data: any) => {
        this.cookieService.set('auth-token', data.token);
        this.router.navigate(['/main']);

      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }

}
