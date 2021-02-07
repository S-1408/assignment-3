import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  url= 'https://jsonplaceholder.typicode.com/posts';

  getImage(){
  return  this.http.get(this.url)
  // .flatMap((response) => response.json())

  }
  // deleteImage(id:any){
  //   return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

  // }

  // addImage(data:string){
  //   return this.http.post("https://jsonplaceholder.typicode.com/posts/id" , data)
  // }

  //BehaviorSubjects shared service
  postDetailRef=new BehaviorSubject({});
  postDetailSubscription=this.postDetailRef.asObservable()
}
