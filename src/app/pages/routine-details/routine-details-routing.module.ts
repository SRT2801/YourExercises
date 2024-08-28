import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineDetailsPage } from './routine-details.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineDetailsPageRoutingModule {}
