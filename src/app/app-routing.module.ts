import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizCardComponent } from './biz-card/biz-card.component';
import { MichaelLimousineComponent } from './michael-limousine/michael-limousine.component';
import { Michael2Component } from './michael2/michael2.component';

const routes: Routes = [
  {path:'', component:BizCardComponent},
  {path:'michael-limousine', component:Michael2Component}
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
