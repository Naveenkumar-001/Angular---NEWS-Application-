import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private http : HttpClient) { }

 url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1555d2f4d1e142bd8a384389139180d3';
 businessUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1555d2f4d1e142bd8a384389139180d3';
entertainmentUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1555d2f4d1e142bd8a384389139180d3';
 generalUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1555d2f4d1e142bd8a384389139180d3';
 healthUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1555d2f4d1e142bd8a384389139180d3';
 sportUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=1555d2f4d1e142bd8a384389139180d3';
 technologyUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1555d2f4d1e142bd8a384389139180d3';
 

 tcHeadlines() : Observable<any>{
   return this.http.get(this.url)
 }
 business() : Observable<any>{
  return this.http.get(this.businessUrl)
}
general() : Observable<any>{
  return this.http.get(this.generalUrl)
}
health() : Observable<any>{
  return this.http.get(this.healthUrl)
}
sport() : Observable<any>{
  return this.http.get(this.sportUrl)
}
entertainment() : Observable<any>{
  return this.http.get(this.entertainmentUrl)
}
technology() : Observable<any>{
  return this.http.get(this.technologyUrl)
}







}
