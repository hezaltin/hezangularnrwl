import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DocumentUnion, Patent, News } from '../../../app/+search/models/document.model'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
  ) { }

  getSearchResults(queryTitle){
    console.log(queryTitle)
    const abstract={ abstract: "A visual prosthesis apparatus and a method for limiting power consumption in a visual prosthesis apparatus. The visual prosthesis apparatus comprises a camera for capturing a video image, a video processing unit associated with the camera, the video processing unit configured to convert the video image to stimulation patterns, and a retinal stimulation system configured to stop stimulating neural tissue in a subject's eye based on the stimulation patterns when an error is detected in a forward telemetry received from the video processing unit."}
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
     let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`;
    return this.http.get(makeSerchUrl);
    if(queryTitle.length==0){
      return of({abstract:''})
    }
   return of(abstract)
  }
  
  
}
