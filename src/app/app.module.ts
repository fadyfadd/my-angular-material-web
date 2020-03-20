import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './app-angular-material'
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent  } from './spinner/spinner.component';
import { ProcessesListComponent } from './processes-list/processes-list.component'
import { EmployeeValidation} from './employee-validation/employee-validation.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NewEditProcessComponent } from './new-edit-process/new-edit-process.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NoactionComponent } from './no-action/no-action.component';

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent , 
    ProcessesListComponent,
    EmployeeValidation,    
    LoginScreenComponent, MainLayoutComponent, NewEditProcessComponent, ConfirmDialogComponent, NoactionComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
