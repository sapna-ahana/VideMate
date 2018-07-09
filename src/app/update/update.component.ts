import { Component, OnInit } from '@angular/core';
import { RecieveDataFromApiServiceService } from '../recieve-data-from-api-service.service';
import { patch } from 'webdriver-js-extender';
import { Router } from '@angular/router'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private q: RecieveDataFromApiServiceService,private route:Router) { }

  ngOnInit() {
    this.q.GetVideoById();
  }
  _id = this.q.GetVideoById()._id
  title = this.q.GetVideoById().title;
  path = this.q.GetVideoById().path;
  description = this.q.GetVideoById().description;


  update = function(vd){
    this.objVideo={
      "title":vd.title,
      "path":vd.path,
      "description":vd.description,
      "_id":vd._id
      
      
      
    }
    this.q.UpdateVideo(this.objVideo).subscribe(
     success=> {
       this.route.navigate(['/edit'])
     }
    );
  }
}
