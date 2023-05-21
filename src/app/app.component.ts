import { Component, OnInit} from '@angular/core';
import { MetaService } from './services/meta-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private metaService: MetaService){

  }
  ngOnInit(): void {
      this.metaService.updateMetaTags('bla', 'bla2');
  }
 
}