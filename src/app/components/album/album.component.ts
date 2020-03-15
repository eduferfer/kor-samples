import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public album: any;

  constructor(
    public spotify: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.spotify.getAlbumById(this.route.snapshot.paramMap.get("id")).subscribe(res => {
      console.log(res)
      this.album = res;
    });
  }

  public formatMs(ms: number): string {
    return new Date(ms).toISOString().slice(14, -5);
  }

}
