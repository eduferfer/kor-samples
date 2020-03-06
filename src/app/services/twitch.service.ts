import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  private baseUri = "https://api.twitch.tv/helix";
  private clientId = "0g2bny99frfeox3ih2cxx2wijqhbv4";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Client-ID': this.clientId
    })
  };
  public streams: any;

  constructor(
    private http: HttpClient
  ) { }

  public getStreams(): void{
    this.http.get(`${this.baseUri}/streams`, this.httpOptions).subscribe((res) => {
      this.streams = res.data;
    })
  }

}
