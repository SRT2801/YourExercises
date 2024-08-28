import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddRoutinePageRoutingModule } from './add-routine-routing.module';
import { AddRoutinePage } from './add-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule
    IonicModule,
    AddRoutinePageRoutingModule
  ],
  declarations: [AddRoutinePage]
})
export class AddRoutinePageModule {}
