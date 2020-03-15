import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(
    public router: Router,
    public spotify: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotify.getAlbums();
  }

}
