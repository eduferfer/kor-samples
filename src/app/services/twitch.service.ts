import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

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

  constructor(
    private http: HttpClient
  ) { }

  public getStreams(filters: any): Observable<object> {
    let filterString = stringify(filters);
    console.log(stringify(filters))
    return this.http.get(`${this.baseUri}/streams?${filterString}`, this.httpOptions);
  }

  public getGame(id: string): any {
    return this.http.get(`${this.baseUri}/games?id=${id}`, this.httpOptions);
  }

}
