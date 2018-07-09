import { Component, OnInit } from '@angular/core';
import { RecieveDataFromApiServiceService } from '../recieve-data-from-api-service.service';
import { Video } from '../VideoClass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private video: Video;


  constructor(private q: RecieveDataFromApiServiceService,private route:Router) { }

  ngOnInit() {

  }
  AddNewVideo = function (vd) {
    this.video = {
      "title": vd.title,
      "path": vd.path,
      "description": vd.description
    }
    this.q.createVIdeoData(this.video).subscribe(
      success=> {
        this.route.navigate(['/view'])
      }
    )
  }

}
