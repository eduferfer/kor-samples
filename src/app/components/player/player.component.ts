import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  public getSrc(): any {
    let name = this.route.snapshot.paramMap.get("id");
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.twitch.tv/?channel=${name}&autoplay=true`);
  }

}
