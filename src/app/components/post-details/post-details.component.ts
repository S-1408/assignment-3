import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { ImageService } from 'src/app/services/image.service';
import { Image } from './../../image';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  title: any;
  postDetail: any;
  image:any;
  constructor(private imageService: ImageService,
    public sanitizer: DomSanitizer) {
      this.image = sanitizer.bypassSecurityTrustUrl(this.image );
    }
// here I used output decorator to delete details card and list of title in the child component.
  @Output() emitPost: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

    //here I used BehaviorSubject to get response  in unrelated components
    this.imageService.postDetailSubscription.subscribe((res) => {
      this.postDetail = res;
     console.log(this.postDetail);

     })


  }



// here I used this method to delete details and list using event emitter.
  deletePost() {
    this.emitPost.emit(this.postDetail);
  }
}
