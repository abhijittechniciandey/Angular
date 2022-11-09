import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptemplateformComponent } from '../emptemplateform/emptemplateform.component';

const routes: Routes = [
  {path:'', component:EmptemplateformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
