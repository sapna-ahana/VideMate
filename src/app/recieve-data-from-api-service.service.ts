import { Injectable } from '@angular/core';
import { Video } from './VideoClass';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RecieveDataFromApiServiceService {
  private baseUrl: String = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private video: Video;

  constructor(private _http: HttpClient) { }
  createVIdeoData(video: Video) {
    return this._http.post(this.baseUrl + '/create', video, { headers: this.headers })
  }
  getVIdeoData() {
    return this._http.get(this.baseUrl + '/read', { headers: this.headers })
  }
  UpdateVideo(objvideo: Video) {
    return this._http.put(this.baseUrl + '/update', objvideo, { headers: this.headers })
  }
  deleteVideo(id: string) {
    return this._http.delete(this.baseUrl + '/delete/' + id, { headers: this.headers })
  }
  
  private updateVideo: Video;
  FetchVideoById(objvideo: Video) {
    this.updateVideo = objvideo;
  }
  GetVideoById() {
    return this.updateVideo;
  }
}
