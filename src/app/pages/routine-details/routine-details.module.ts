import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineDetailsPageRoutingModule } from './routine-details-routing.module';

import { RoutineDetailsPage } from './routine-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineDetailsPageRoutingModule
  ],
  declarations: [RoutineDetailsPage]
})
export class RoutineDetailsPageModule {}
