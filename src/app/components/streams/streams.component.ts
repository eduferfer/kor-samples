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

  public getThumbnail(raw: string): string {
    let url: string;
    url = raw.replace("{width}", "400").replace("{height}", "240");
    return url;
  }

}
