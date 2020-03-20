import { Component, OnInit , Input , ViewChild, ElementRef , EventEmitter, Output  } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar , private router : Router) { 

  }

  @ViewChild("userName" , {static:true})
    userName:ElementRef;

  @ViewChild("password" , {static:true})
    password:ElementRef;

  @Output()
  loginAttempt:EventEmitter<boolean> = new EventEmitter<boolean>();
 

  msgbox(message , action) {
    this._snackBar.open(message , action);
  }

  displayMode = "block";

  @Input()
  set isVisible(isVisible:Boolean) { 
      if (isVisible == true)
        this.displayMode = "block";
      else
        this.displayMode = "none";
  }

  onClick(userName , password) {
    
    if (userName.value == "admin" && password.value == "admin123") 
     {  this.loginAttempt.emit(true);
        this.userName.nativeElement.value = "";
        this.password.nativeElement.value = "";
        this.router.navigateByUrl("/home");
     }
    else {
      this.msgbox("Username/Password combination not valid" , "Close");
      this.loginAttempt.emit(false);


    }
    
  }

  ngOnInit(): void {
  }

}
