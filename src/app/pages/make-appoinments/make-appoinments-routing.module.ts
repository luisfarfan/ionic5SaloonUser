import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeAppoinmentsPage } from './make-appoinments.page';

const routes: Routes = [
  {
    path: '',
    component: MakeAppoinmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeAppoinmentsPageRoutingModule {}
