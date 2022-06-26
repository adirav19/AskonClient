import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NukonComponent } from './nukon/nukon.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    NukonComponent,
    DashboardComponent,
    ComponentsComponent
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ComponentsComponent,
    DashboardComponent,
    NukonComponent
  ]
})
export class ComponentsModule { }
