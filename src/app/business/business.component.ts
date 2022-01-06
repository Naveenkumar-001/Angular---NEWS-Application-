import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  data : any = [];
  constructor(private api : TcnewsapiService) { }

  ngOnInit(): void {
    this.api.business().subscribe((data) => {
      console.log(data);
      this.data = data.articles;
      
    })
  }

}
