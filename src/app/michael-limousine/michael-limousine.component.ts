import { Component,  OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-michael-limousine',
  templateUrl: './michael-limousine.component.html',
  styleUrls: ['./michael-limousine.component.css']
})

export class MichaelLimousineComponent implements OnInit {

  title = 'michael-limousin';
  CompanyName= "מיכאל לימוזין הסעות";
  PhoneNumber = '+972509285550';
  Message = 'שלום';
  GmailTo = 'mailto:limousine97@gmail.com';
  WebsiteUrl = 'https://michaellimozin.co.il/';

  AboutUs = "מיכאל לימוזין – הסעות VIP היא חברת הסעות במרכז שמספקת שירותים איכותיים ויוקרתיים לחברות, ארגונים, מוסדות לימוד, לקוחות פרטיים ועוד. החברה מעמידה לרשות הקהל הרחב צי מכוניות חדיש ומאובזר ברמה VIP גבוהה, הכוללת: מיניבוסים, אוטובוסים ומעלונים.";

  constructor(private sanitizer: DomSanitizer, private titleService: Title,
    private meta: Meta) {   
    }
  
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ property: 'og:image', content: './assets/michael-limousin-images/theme.jpg' });
    
  }

  get sanitizedUrl(): SafeUrl {
    let url = `https://api.whatsapp.com/send?phone=${this.PhoneNumber}&text=${encodeURIComponent(this.Message)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
   
}
