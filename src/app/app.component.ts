import { Component} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SeoService } from './services/seo-service';
import { filter, map, mergeMap, tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService) {}
  
  ngOnInit(): void {

    console.log("HELLO FROM APP COMPONENT");

      this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        console.log("ROUTE = " + route);
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {

      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
      this.seoService.updateMetaTags(seoData['metaTags']);
    }); 
 
  }

  
 
}

