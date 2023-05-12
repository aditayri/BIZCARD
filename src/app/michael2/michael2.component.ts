import { Component,  OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-michael2',
  templateUrl: './michael2.component.html',
  styleUrls: ['./michael2.component.css']
})
export class Michael2Component implements OnInit {

  title = 'michael-limousin';
  CompanyName= "מיכאל לימוזין הסעות";
  PhoneNumber = '+972509285550';
  Message = 'שלום';
  GmailTo = 'mailto:limousine97@gmail.com';
  WebsiteUrl = 'https://michaellimozin.co.il/';
  AboutUs = "מיכאל לימוזין – הסעות VIP היא חברת הסעות במרכז שמספקת שירותים איכותיים ויוקרתיים לחברות, ארגונים, מוסדות לימוד, לקוחות פרטיים ועוד. החברה מעמידה לרשות הקהל הרחב צי מכוניות חדיש ומאובזר ברמה VIP גבוהה, הכוללת: מיניבוסים, אוטובוסים ומעלונים.";


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
    private meta: Meta) {   
    }
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ property: 'og:image', content: './assets/michael-limousin-images/theme.jpg' });

    /* navigator.geolocation.getCurrentPosition((position) => {
      this.mapCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.markerPosition ={
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

    }); */

  }

  get sanitizedUrl(): SafeUrl {
    let url = `https://api.whatsapp.com/send?phone=${this.PhoneNumber}&text=${encodeURIComponent(this.Message)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
