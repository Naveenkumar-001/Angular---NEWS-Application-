import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

 
data : any = [];
constructor(private api : TcnewsapiService) { }

ngOnInit(): void {
  this.api.health().subscribe((data) => {
    console.log(data);
    this.data = data.articles;
    
  })
}
}

