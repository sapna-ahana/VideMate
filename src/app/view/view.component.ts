import { Component, OnInit } from '@angular/core';
import { RecieveDataFromApiServiceService } from '../recieve-data-from-api-service.service';
import { Video } from '../VideoClass'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private objvideo: Video;

  constructor(private q: RecieveDataFromApiServiceService) { }

  ngOnInit() {
    this.GetVideo();
  }
  GetVideo() {
    this.q.getVIdeoData().subscribe(
      data => {
        this.objvideo = data['msg'];
      }
    )
  }

}
