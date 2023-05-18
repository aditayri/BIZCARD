import { Component,  OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MetaService } from '../services/meta-service.service';


@Component({
  selector: 'app-michael-limousine',
  templateUrl: './michael-limousine.component.html',
  styleUrls: ['./michael-limousine.component.css']
})
export class MichaelLimousineComponent implements OnInit {

  title = 'Michael Limousine';
  description = 'שירותי הסעות לכל חלקי הארץ';
  metaImage = './assets/michael-limousine-images/theme.jpg';

  CompanyName= "מיכאל לימוזין הסעות";
  PhoneNumber = '+972509285550';
  Message = 'שלום, ...';
  GmailTo = 'mailto:limousine97@gmail.com';
  WebsiteUrl = 'https://michaellimozin.co.il/';
  AboutUs = "מיכאל לימוזין – הסעות VIP היא חברת הסעות במרכז שמספקת שירותים איכותיים ויוקרתיים לחברות, ארגונים, מוסדות לימוד, לקוחות פרטיים ועוד. החברה מעמידה לרשות הקהל הרחב צי מכוניות חדיש ומאובזר ברמה VIP גבוהה, הכוללת: מיניבוסים, אוטובוסים ומעלונים.";


  isAboutVisible=false;
  isServicesVisible=false;
  isMapVisible=false;

  //Map for location of business
  mapCenter: google.maps.LatLngLiteral = { lat: 31.995672, lng: 34.936824 }; // Replace with your desired latitude and longitude
  mapZoom = 13; // Adjust the zoom level as needed
  markerPosition: google.maps.LatLngLiteral = { lat: 31.995672, lng: 34.936824 }; // Replace with your desired marker position
  options: google.maps.MapOptions = 
  {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8 };


  constructor(private sanitizer: DomSanitizer, private meta: MetaService) {}
  
  ngOnInit() {
    this.meta.updateMetaTags(this.title, this.description);
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
    this.mapCenter = { lat: 31.995672, lng: 34.936824 }; // Replace with your desired latitude and longitude
    this.mapZoom = 13; // Adjust the zoom level as needed
    this.markerPosition = { lat: 31.995672, lng: 34.936824 }; 
    this.isMapVisible = !this.isMapVisible;
  }


  
}
