import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './services/settings.service';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kor-music';

  constructor(
    public router: Router,
    public settings: SettingsService,
    public spotify: SpotifyService
  ) { }

  ngOnInit(): void {
    if (!this.spotify.authorized) {
      this.spotify.auth();
    }
  }

  public getPageLabel(): string {
    let label: string, url: string;
    url = this.router.url;
    switch (url) {
      case '/home':
        label = 'Home';
        break;
      case '/artists':
        label = 'Artists';
        break;
      case '/search':
        label = 'Search';
        break;
    }
    return label;
  }
}
