import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  
data : any = [];
constructor(private api : TcnewsapiService) { }

ngOnInit(): void {
  this.api.general().subscribe((data) => {
    console.log(data);
    this.data = data.articles;
    
  })
}
}