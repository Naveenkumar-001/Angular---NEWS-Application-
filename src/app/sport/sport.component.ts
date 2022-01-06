import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  
data : any = [];
constructor(private api : TcnewsapiService) { }

ngOnInit(): void {
  this.api.sport().subscribe((data) => {
    console.log(data);
    this.data = data.articles;
    
  })
}
}

