import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  public streams: any;
  public languages: any[] = [];
  public games: any[] = [];
  public filters: any = {}

  constructor(
    public twitch: TwitchService
  ) { }

  ngOnInit(): void {
    this.getStreams();
  }

  public getStreams(): void {
    // get streams
    this.twitch.getStreams(this.filters).subscribe((res: any) => {
      // assign response array
      this.streams = res.data;
      console.log(this.streams);
      // push language and game
      res.data.forEach(stream => {
        this.pushEntry("languages", stream.language);
        this.pushEntry("games", stream.game_id);
      });
    });
  }

  // push an entry to an array
  private pushEntry(array: string, entry: string): void {
    let index = this[array].indexOf(entry);
    if (index < 0) { this[array].push(entry); }
  }

  // get thumbnail url
  public getThumbnail(raw: string): string {
    return raw.replace("{width}", "400").replace("{height}", "240");
  }

}
