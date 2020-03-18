import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessesListComponent} from './processes-list/processes-list.component';
import { EmployeeValidation} from './employee-validation/employee-validation.component';


const routes: Routes = [{path: '', component: HomeComponent, pathMatch: 'full'},
                        {path: 'home', component: HomeComponent},
                        {path: 'process-list' , component:ProcessesListComponent},
                        {path: 'employee-validation' , component:EmployeeValidation}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
