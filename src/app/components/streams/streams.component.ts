import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  constructor(
    private twitch: TwitchService
  ) { }

  ngOnInit(): void {
    this.twitch.getStreams();
    console.log(this.twitch.streams);
  }

}
