import { Component, OnInit } from '@angular/core';
import {ServerServiceService} from '../server-service.service';
import { Game } from './model';

@Component({
  selector: 'app-games-component',
  templateUrl: './games-component.component.html',
  styleUrls: ['./games-component.component.css'],
  providers: [ServerServiceService]
})
export class GamesComponentComponent implements OnInit {

  game: Game[];

  constructor(private serverServiceService: ServerServiceService) { }

  ngOnInit(): void {
    this.showGames();
  }


  async showGames() {
    this.serverServiceService.getData().subscribe(
      (data: Game[]) => {
        console.log(data);
        this.game = data;
      });
  }

}
