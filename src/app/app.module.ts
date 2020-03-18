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

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent , 
    ProcessesListComponent,
    EmployeeValidation
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
