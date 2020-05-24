import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAppoinmentsPageRoutingModule } from './make-appoinments-routing.module';

import { MakeAppoinmentsPage } from './make-appoinments.page';
import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeAppoinmentsPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [MakeAppoinmentsPage]
})
export class MakeAppoinmentsPageModule {}
