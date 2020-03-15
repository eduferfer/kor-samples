import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public newReleases: any;
  public featuredPlaylists: any;

  constructor(
    public spotify: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe((res: any) => {
      this.newReleases = res.albums.items;
      console.log(this.newReleases);
    })
    this.spotify.getFeaturedPlaylists().subscribe((res: any) => {
      this.featuredPlaylists = res.playlists.items;
      console.log(res);
    })
  }

}
