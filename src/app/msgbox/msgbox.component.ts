import { Component, OnInit } from '@angular/core'; 
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class MsgboxComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  
  durationInSeconds = 5;


  openSnackBar() {
    this._snackBar.openFromComponent(MsgboxComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  ngOnInit(): void {
  }

}
