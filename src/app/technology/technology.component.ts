import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {


  data : any = [];
  constructor(private api : TcnewsapiService) { }

  ngOnInit(): void {
    this.api.technology().subscribe((data) => {
      console.log(data);
      this.data = data.articles;
      
    })
  }
}