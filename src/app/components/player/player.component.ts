import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public settings: SettingsService
  ) { }

  ngOnInit(): void {
  }

  public getSrc(): SafeResourceUrl {
    let name = this.route.snapshot.paramMap.get("id");
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://embed.twitch.tv/?channel=${name}&theme=${this.settings.theme}`);
  }

}
