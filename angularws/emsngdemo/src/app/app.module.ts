import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirective } from './directives/custom.directive';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { EmpPipe } from './pipes/emp.pipe';
import { EmptemplateformComponent } from './emptemplateform/emptemplateform.component';
import { EditempformComponent } from './editempform/editempform.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { PromiseObsComponent } from './promise-obs/promise-obs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    EmployeelistComponent,
    DirectivesComponent,
    CustomDirective,
    PipesComponent,
    CustomPipe,
    EmpPipe,
    EmptemplateformComponent,
    EditempformComponent,
    LifecycleComponent,
    ChildComponent,
    ReactiveComponent,
    ServiceCompComponent,
    PromiseObsComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
