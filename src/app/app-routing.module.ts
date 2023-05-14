import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizCardComponent } from './biz-card/biz-card.component';
import { MichaelLimousineComponent } from './michael-limousine/michael-limousine.component';

const routes: Routes = [
  {
    path:'',
    component:BizCardComponent,
     data: {
       title: 'Bizcard',
       description: 'Create your own business card'
      }
      },
  {
    path:'michael-limousine', 
    component:MichaelLimousineComponent, 
    data: {
       title: 'Michael Limsine' ,
       description: 'מיכאל לימוזין הסעות'
      }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
 BizCardComponent,
 MichaelLimousineComponent
];
