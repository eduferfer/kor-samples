import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {

  constructor(
    private twitch: TwitchService
  ) { }

  ngOnInit(): void {
  }

}
