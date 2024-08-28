import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRoutinePage } from './add-routine.page';

const routes: Routes = [
  {
    path: '',
    component: AddRoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutinePageRoutingModule {}
