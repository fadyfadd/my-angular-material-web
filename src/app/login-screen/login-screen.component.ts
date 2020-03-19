import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { 

  }

  msgbox(message , action) {
    this._snackBar.open(message , action);
  }

  onClick() {
    this.msgbox("Username/Password combination not valid" , "Close");
  }

  ngOnInit(): void {
  }

}
