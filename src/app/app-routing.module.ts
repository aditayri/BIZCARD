import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizcardComponent } from './bizcard/bizcard.component';
import { MichaelLimousineComponent } from './michael-limousine/michael-limousine.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'bizcard', pathMatch: 'full'
  },
  
  {
    path: 'bizcard',
    component:BizcardComponent,
    data: {
      seo: {
        title: 'Welcome to bizcard',
        metaTags: [
          { name: 'description', content: 'Create your own business cards' },
          { property: 'og:title', content: 'bizcard' },
          { proprety: 'og:description', content: 'Create your own business cards' }
        ]
      }
    }
  },
  {
    path: 'michael-limousine',
    component:MichaelLimousineComponent,
    data: {
      seo: {
        title: 'מיכאל לימוזין הסעות',
        metaTags: [
          { name: 'description', content: 'הסעות מכל מקום לכל מקום ובזמן' },
          { property: 'og:title', content: 'מיכאל לימוזין הסעות' },
          { proprety: 'og:description', content: 'הסעות מכל מקום לכל מקום ובזמן' }
        ]
      }
    }
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
 BizcardComponent,
 MichaelLimousineComponent
];
