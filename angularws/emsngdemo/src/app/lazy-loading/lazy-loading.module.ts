import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { EmptemplateformComponent } from '../emptemplateform/emptemplateform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmptemplateformComponent],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule, FormsModule
  ]
})
export class LazyLoadingModule { }
