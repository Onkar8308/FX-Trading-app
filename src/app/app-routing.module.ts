import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCComponent } from './activity-c/activity-c.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'activity',component:ActivityCComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
