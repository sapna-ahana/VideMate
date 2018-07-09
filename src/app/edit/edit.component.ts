import { Component, OnInit } from '@angular/core';
import { RecieveDataFromApiServiceService } from '../recieve-data-from-api-service.service';
import { Video } from '../VideoClass'
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private objvideo: Video;

  constructor(private q: RecieveDataFromApiServiceService, private route: Router) { }

  ngOnInit() {
    this.GetVideo();
  }
  GetVideo() {
    this.q.getVIdeoData().subscribe(
      data => {
        this.objvideo = data['msg'];
      }
    );

  }
  updateData(k) {
    this.q.FetchVideoById(k);
    this.route.navigate(['/update']);
  }
  deletData(k) {
    this.q.deleteVideo(k._id).subscribe(
      success => {
        this.GetVideo();
      }
    )
  }
}

