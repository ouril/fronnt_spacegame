import {Component, OnInit} from '@angular/core';
import {ServerServiceService} from '../server-service.service';
import {Game} from './model';

@Component({
  selector: 'app-games-component',
  templateUrl: './games-component.component.html',
  styleUrls: ['./games-component.component.css'],
  providers: [ServerServiceService]
})
export class GamesComponentComponent implements OnInit {

  game: Game[];

  constructor(private serverServiceService: ServerServiceService) {
  }

  ngOnInit(): void {
    // this.showGames();
  }

  turn() {
    console.log('turn');
    this.serverServiceService.stopTurn().subscribe(
      (data: any) => {
        console.log(data);
        // this.game = data;
      },
      error => {
        console.log(error.status);
        if (error.status === 401) {
          this.serverServiceService.refresh(() => {
            this.turn();
          });
        }

      }
    );
  }


  async showGames() {
    this.serverServiceService.getData().subscribe(
      (data: any) => {
        console.log(data);
        this.game = data;
      });
  }

}
