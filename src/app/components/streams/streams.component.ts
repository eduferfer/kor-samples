import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  public streams: any;
  public languages: any[] = [];
  public filters: any = {}

  constructor(
    public twitch: TwitchService,
    private router: Router
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
      });
    });
  }

  // push an entry to an array if it is unique
  private pushEntry(array: string, entry: string): void {
    let duplicate: boolean;
    duplicate = this[array].indexOf(entry) > -1;
    if (!duplicate) {
      this[array].push(entry);
    }
  }

  // get thumbnail url
  public getThumbnail(raw: string): string {
    return raw.replace("{width}", "400").replace("{height}", "240");
  }

  // open selected stream
  public openStream(id: string): void {
    // get user login and open stream page
    this.twitch.getUser(id).subscribe((res: any) => {
      this.router.navigateByUrl(`/streams/${res.data[0].login}`);
    });
  }

}
