import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  constructor(private titleService:Title,private metaService:Meta) { }

  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
    this.metaService.updateTag({ property:'og:title', content: newTitle });  

  }
  setDescription(newDescription: string): void {
    this.metaService.updateTag({ name: 'description', content: newDescription });
/*     this.metaService.updateTag({ property:'og:image', content: this.metaImage });
 */    this.metaService.updateTag({ property:'og:description', content: newDescription });
  }
}
