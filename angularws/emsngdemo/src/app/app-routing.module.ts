import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmptemplateformComponent } from './emptemplateform/emptemplateform.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';
import { MainComponent } from './main/main.component';
import { TempComponent } from './temp/temp.component';


const routes: Routes = [
  {path:'', redirectTo:'list',pathMatch:'full'},
  {path:'list', component:EmployeelistComponent, canActivate:[AuthService]},
  // {path:'add', component:EmptemplateformComponent},
  {path:'add', loadChildren:()=>import('./lazy-loading/lazy-loading.module')
    .then(m=>m.LazyLoadingModule)},
  {path:'login', component:LoginComponent},
  // {path:'profile/:id/:name', component:ProfileComponent},
  {path:'profile/:id', component:ProfileComponent,
    children:[
      {path:'details', component:DetailsComponent}
    ]
    }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MainComponent],
  declarations: [
    MainComponent,
    TempComponent
  ],
  
})
export class AppRoutingModule { }
