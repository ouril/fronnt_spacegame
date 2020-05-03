import {Component, OnInit} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ServerServiceService} from './server-service.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'swgameFront';

  constructor(
    private route: ActivatedRoute,
    private serverServiceService: ServerServiceService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.cookieService.get('auth-token');
    if (token == null || token === ''){
      this.router.navigate(['/login']);
    }

  }
}
