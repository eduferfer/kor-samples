import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // auth variables
  private authUri: string = "https://accounts.spotify.com/api/token";
  private clientId: string = "2d8a78fc91d64871ad97afcae5a79e4f";
  private clientSecret: string = "33c8dee25fd14368bfc7bd0bd225f2cb";
  public authorized: boolean = false;

  private baseUri: string = "https://api.spotify.com/v1";
  public httpOptions: any = { 
    headers: new HttpHeaders({
      "Authorization": ""
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  public auth(): void {
    // define auth headers
    let headers = new HttpHeaders({
        "Authorization": "Basic " + btoa(this.clientId + ":" + this.clientSecret),
        "Content-Type": "application/x-www-form-urlencoded"
      });
    // do the post
    this.http.post(`${this.authUri}`, "grant_type=client_credentials", { headers }).subscribe((res: any) => {
      console.log(res);
      this.httpOptions.headers.set("Authorization", "Bearer " + res.access_token);
      this.authorized = true;
    })
  }

  public getAlbums(): void {
    this.http.get(`${this.baseUri}/albums/6akEvsycLGftJxYudPjmqK`, this.httpOptions).subscribe(res => {
      console.log(res);
    })
  }
}
