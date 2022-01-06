import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

 
data : any = [];
constructor(private api : TcnewsapiService) { }

ngOnInit(): void {
  this.api.entertainment().subscribe((data) => {
    console.log(data);
    this.data = data.articles;
    
  })
}
}