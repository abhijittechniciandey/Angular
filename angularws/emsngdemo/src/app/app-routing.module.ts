import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmptemplateformComponent } from './emptemplateform/emptemplateform.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {path:'', redirectTo:'list',pathMatch:'full'},
  {path:'list', component:EmployeelistComponent, canActivate:[AuthService]},
  {path:'add', component:EmptemplateformComponent},
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
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
