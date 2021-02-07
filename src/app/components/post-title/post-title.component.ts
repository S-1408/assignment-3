import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ImageService } from './../../services/image.service';
import { NgForm } from '@angular/forms';


interface Data {
  title: string;
}

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
})
export class PostTitleComponent implements OnInit {

  // store the response from api in images
  images: any[] = [];
  // store the response after filter data
  images2: any[] = [];
  // store form data value
  data: Data[] = [];

  // use condition  in ng-container
  titleRow: boolean = false;
  detailsRow: boolean = false;

  imageUrl: string = "";
  fileToUpload!: any;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getImageTitle();
  }

  // get Post list using image-service
  getImageTitle() {
    this.imageService.getImage().subscribe((res: any) => {
      //console.log(res);
      this.images = res;
      this.images2 = this.images.filter((i) => i.userId == 1 && i.id <= 8);
      //console.log(this.images2);
    });
  }

// this method use to show details of list on clicking particular row
  RowSelected(u: any, index: number) {
    let obj = { postIndex: index, ...u };
    this.imageService.postDetailRef.next(obj);
    this.detailsRow = true;
    this.titleRow = false;
  }

  // this method use to show create form
  addTitle() {
    this.titleRow = true;
    this.detailsRow = false;
  }

  //this method use to delete list details
  deleteTitle1(event: any) {
    this.images2.splice(event.postIndex, 1);
    this.detailsRow = false;

    this.imageService.postDetailRef.next({});
  }

  // this method use to store value in data array on click submit button
  onSubmit(forms: NgForm) {

    console.log(forms.value);

    this.data = forms.value;
    this.titleRow = false;

    this.images2.push(this.data);
  }

  // use to upload image file
  upload(file: FileList){

    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }

    }


