import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizcardComponent } from './bizcard/bizcard.component';
import { MichaelLimousineComponent } from './michael-limousine/michael-limousine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    component:PageNotFoundComponent,
    data: {
      seo: {
        title: 'Welcome to bizcard',
        metaTags: [
          { property: 'og:title', content: 'bizcard' },
          { proprety: 'og:description', content: 'Create your own business cards' }
        ]
      }
    }
  },
  {
    path: 'michael-limousine',
    pathMatch: 'full',
    component:MichaelLimousineComponent,
    data: {
      seo: {
        title: 'מיכאל לימוזין הסעות',
        metaTags: [
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
 PageNotFoundComponent,
 MichaelLimousineComponent
];
