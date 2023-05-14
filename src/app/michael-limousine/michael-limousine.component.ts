import { Component,  OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';



@Component({
  selector: 'app-michael-limousine',
  templateUrl: './michael-limousine.component.html',
  styleUrls: ['./michael-limousine.component.css']
})
export class MichaelLimousineComponent implements OnInit {

  title = 'michael-limousin';
  CompanyName= "מיכאל לימוזין הסעות";
  PhoneNumber = '+972509285550';
  Message = '... ,שלום';
  GmailTo = 'mailto:limousine97@gmail.com';
  WebsiteUrl = 'https://michaellimozin.co.il/';
  AboutUs = "מיכאל לימוזין – הסעות VIP היא חברת הסעות במרכז שמספקת שירותים איכותיים ויוקרתיים לחברות, ארגונים, מוסדות לימוד, לקוחות פרטיים ועוד. החברה מעמידה לרשות הקהל הרחב צי מכוניות חדיש ומאובזר ברמה VIP גבוהה, הכוללת: מיניבוסים, אוטובוסים ומעלונים.";

  isAboutVisible=false;
  isServicesVisible=false;
  isMapVisible=false;

  mapCenter: google.maps.LatLngLiteral = { lat: 31.995672, lng: 34.936824 }; // Replace with your desired latitude and longitude
  mapZoom = 13; // Adjust the zoom level as needed
  markerPosition: google.maps.LatLngLiteral = { lat: 31.995672, lng: 34.936824 }; // Replace with your desired marker position
  options: google.maps.MapOptions = {
  mapTypeId: 'hybrid',
  zoomControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  maxZoom: 20,
  minZoom: 8,
  };
  constructor(private sanitizer: DomSanitizer, private titleService: Title,
    private meta: Meta, private activatedRoute: ActivatedRoute,
  private router: Router) {   
    }
  
  ngOnInit() {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
    .subscribe((data) => {
      const pageTitle = data['title'] || 'Default Page Title'; // Replace with your default page title
      this.titleService.setTitle(pageTitle);
    });
  }

  get sanitizedUrl(): SafeUrl {
    let url = `https://api.whatsapp.com/send?phone=${this.PhoneNumber}&text=${encodeURIComponent(this.Message)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  toggleAboutText() {
    this.isAboutVisible = !this.isAboutVisible;
  }
  toggleServicesText() {
    this.isServicesVisible = !this.isServicesVisible;
  }
  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }
}
