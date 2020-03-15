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
    // authenticate on load and redirect to home
    this.router.navigateByUrl('/search')
    this.spotify.auth().then(() => this.router.navigateByUrl('/'));
  }

  // get app bar label depending on activated route
  public getPageLabel(): string {
    switch (this.router.url) {
      case '/home':
        return 'Home';
      case '/artists':
        return 'Artists';
      case '/search':
        return 'Search';
    }
  }
}
