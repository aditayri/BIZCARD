import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { MetaService } from '../services/meta-service.service';


@Component({
  selector: 'app-biz-card',
  templateUrl: './biz-card.component.html',
  styleUrls: ['./biz-card.component.css']
})


export class BizCardComponent implements OnInit {

  
  title = 'Bizcard';
  description = 'Create your own business card';
  metaImage = './assets/bizcard-images/theme.jpg';

  CompanyName= "Adi Tayri LLC";
  PhoneNumber = '+972502003238';
  Message = 'Hello, and welcome to BizId company';
  FacebookUser= 'aditayri';
  InstagramUser = 'aditayri';
  GmailTo = 'mailto:aditayri@gmail.com';

  AboutUs = "At "+this.CompanyName+ ", we're dedicated to providing safe"+
            "reliable, and efficient transportation solutions to our clients. With years of experience in the industry";


  constructor(private sanitizer: DomSanitizer, private meta:MetaService) {
    this.meta.updateMetaTags(this.title, this.description);

  }

  ngOnInit() {
  }

  get sanitizedUrl(): SafeUrl {
    let url = `https://api.whatsapp.com/send?phone=${this.PhoneNumber}&text=${encodeURIComponent(this.Message)}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
   

  FacebookClick()
  {
      let pageUrl = 'https://www.facebook.com/'+this.FacebookUser; // Replace with the URL of the Facebook page you want to go to
      window.open(pageUrl, '_blank'); // Op
  }
  InstagramClick()
  {
    let pageUrl = 'https://www.instagram.com/'+this.InstagramUser; // Replace with the URL of the Instagram page you want to go to
    
    window.open(pageUrl, '_blank');
  }
  
  }
