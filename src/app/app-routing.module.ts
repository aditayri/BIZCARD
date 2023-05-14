import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizCardComponent } from './biz-card/biz-card.component';
import { MichaelLimousineComponent } from './michael-limousine/michael-limousine.component';

const routes: Routes = [
  {path:'', component:BizCardComponent},
  {path:'michael-limousine', component:MichaelLimousineComponent, data: { title: 'Michael Limousine' }}
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
