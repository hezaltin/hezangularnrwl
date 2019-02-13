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

  getSearchResults(query){
    console.log(query)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const queryName = query.searchvalue
     //let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryName}`;
     let makeSerchUrl  = `https://api.themoviedb.org/3/search/movie?api_key=90151c448e96b4fafd5c03586224e1fb&language=en-US&query=${queryName}&page=1&include_adult=false`
    return this.http.get(makeSerchUrl);
   
  }

  getSearchResultsByTelivisionSeries(query){
    console.log(query)
    const queryName = query.searchvalue
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
     //let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryName}`;
     let makeSerchUrl  = `https://api.themoviedb.org/3/search/tv?api_key=90151c448e96b4fafd5c03586224e1fb&language=en-US&query=${queryName}&page=1&include_adult=false`
    return this.http.get(makeSerchUrl);
   
  }

  getSearchResultsByPeople(query){

    console.log(query)
    const queryName = query.searchvalue
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
     //let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryName}`;
     let makeSerchUrl  = `https://api.themoviedb.org/3/search/person?api_key=90151c448e96b4fafd5c03586224e1fb&language=en-US&query=${queryName}&page=1&include_adult=false`
    return this.http.get(makeSerchUrl);
   
  }
  
  
}
