import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  url= 'https://jsonplaceholder.typicode.com/posts';

  getImage(){
  return  this.http.get(this.url)


  }



  //BehaviorSubjects shared service
  postDetailRef=new BehaviorSubject({});
  postDetailSubscription=this.postDetailRef.asObservable()

  PostImage =new BehaviorSubject("");
}
