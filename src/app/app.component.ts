import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'kor-gaming';

  constructor (
    public router: Router,
    public settings: SettingsService
  ) {}

  public switchTheme(): void {
    this.settings.theme = this.settings.theme == 'light' ? 'dark' : 'light';
  }

}
