import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  data : any = [];
  constructor(private api : TcnewsapiService) { }

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((data) => {
      console.log(data);
      this.data = data.articles;
      
    })
  }

}
