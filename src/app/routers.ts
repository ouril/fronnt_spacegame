import {EnterComponent} from './enter/enter.component';
import {GamesComponentComponent} from './games-component/games-component.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: EnterComponent },
  { path: 'main', component: GamesComponentComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
];
