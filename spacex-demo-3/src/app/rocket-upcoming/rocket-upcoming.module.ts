import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RocketUpcomingPage } from './rocket-upcoming.page';

const routes: Routes = [
  {
    path: '',
    component: RocketUpcomingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RocketUpcomingPage]
})
export class RocketUpcomingPageModule {}
