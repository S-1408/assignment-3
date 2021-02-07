import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  title: any;
  postDetail: any;

  constructor(private imageService: ImageService,
    public _sanitizer: DomSanitizer) {}
// here I used output decorator to delete details card and list of title in the child component.
  @Output() emitPost: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

    //here I used BehaviorSubject to get response  in unrelated components
    this.imageService.postDetailSubscription.subscribe((res) => {
      this.postDetail = res;
     // console.log(this.postDetail);

    });
  }

  // I used this method  to santize the image url but it not working
  public getSantizeUrl(url:string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }


// here I used this method to delete details and list using event emitter.
  deletePost() {
    this.emitPost.emit(this.postDetail);
  }
}
