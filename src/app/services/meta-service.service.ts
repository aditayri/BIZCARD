import { Title, Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private titleService: Title, private metaService: Meta) {}

  updateMetaTags(title: string, description: string): void {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({property:'og:title', content: title});
    this.metaService.updateTag({name:'og:description', content: description});
    this.metaService.updateTag({name : "og:image", content : "myImage"});
    
  }

}
