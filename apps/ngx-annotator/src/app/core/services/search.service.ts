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
    console.log('searchQuery===>',query)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const queryName = query.searchvalue
    const queryLanguage = query.filterValue.language.length > 0 ? query.filterValue.language[0].name  : 'en'
    const queryRegion= query.filterValue.region.length > 0 ? query.filterValue.region[0].name  : 'US'
    const queryYear = query.filterValue.year.length > 0 ? query.filterValue.year[0].name  : 2017
     //let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryName}`;
     let makeSerchUrl  = `https://api.themoviedb.org/3/search/movie?api_key=90151c448e96b4fafd5c03586224e1fb&language=${queryLanguage}&query=${queryName}&page=1&include_adult=false&region=${queryRegion}&year=${queryYear}`
    return this.http.get(makeSerchUrl);
   
  }

  getSearchResultsByTelivisionSeries(query){
    console.log('televisionQuey====>',query)
    const queryName = query.searchvalue
    const queryLanguage = query.filterValue.language.length > 0 ? query.filterValue.language[0].name  : 'en'
    const queryRegion= query.filterValue.region.length > 0 ? query.filterValue.region[0].name  : 'US'
    const queryYear = query.filterValue.year.length > 0 ? query.filterValue.year[0].name  : 2017
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
     //let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryName}`;
     let makeSerchUrl  = `https://api.themoviedb.org/3/search/tv?api_key=90151c448e96b4fafd5c03586224e1fb&language=${queryLanguage}&query=${queryName}&page=1&include_adult=false&region=${queryRegion}&first_air_date_year=${queryYear}`
    return this.http.get(makeSerchUrl);
   
  }

  getSearchResultsByPeople(query){

    console.log('peopleQuery====>',query)
    const queryName = query.searchvalue
    const queryLanguage = query.filterValue.language.length > 0 ? query.filterValue.language[0].name : 'en'
    const queryRegion= query.filterValue.region.length > 0 ? query.filterValue.region[0].name  : 'US'
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
     //let makeSerchUrl =`https://www.googleapis.com/books/v1/volumes?q=${queryName}`;
     let makeSerchUrl  = `https://api.themoviedb.org/3/search/person?api_key=90151c448e96b4fafd5c03586224e1fb&language=${queryLanguage}&query=${queryName}&page=1&include_adult=false&region=${queryRegion}`
    return this.http.get(makeSerchUrl);
   
  }
  
  
}
