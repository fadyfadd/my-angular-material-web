import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpParams} from '@angular/common/http'
import { SpinnerController } from '../spinner/spinner-controler';
import { AppSettings } from '../app-settings'
import { IProcess } from '../processes-list/iprocess';
import { catchError, map, tap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';






export interface DialogData {
  id: string;
  mode: string;
}
 

@Component({
  selector: 'app-new-edit-process',
  templateUrl: './new-edit-process.component.html',
  styleUrls: ['./new-edit-process.component.css']
})
export class NewEditProcessComponent {
  constructor(
    private http:HttpClient , private spinnerController: SpinnerController , private appSettings: AppSettings,
    public dialogRef: MatDialogRef<NewEditProcessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , public msgbox:MatSnackBar) { }

  onCancel() {
    this.dialogRef.close(false);
  }

  id:any;
  machineName:any;
  basePriority:any;
  mainWindowTitle:any; 

  onSave() {
    //alert(this.basePriority);
    this.dialogRef.close(true);
   //this.msgbox.open("cannot save" , "close");
  }

  ngOnInit() {

    if (this.data.mode == "new")
        return;

    let params: HttpParams = new HttpParams();
    let headers: HttpHeaders = new HttpHeaders();
   
    params = params.append("id" , this.data.id);
    const httpOptions = {
      headers: headers,
      params: params
    };

    this.spinnerController.start();
    this.http.get<IProcess>(this.appSettings.parameters.baseRef + "dataprovider/processes-by-id", httpOptions).pipe(tap(_ => { }),
      catchError((e, a) => { return [null] })
    ).subscribe(a => {
      this.spinnerController.stop();
      
      if (a == true)
      {
          this.id = a.id;
          this.machineName = a.machineName;
          this.mainWindowTitle = a.mainWindowTitle;
          this.basePriority = a.basePriority;
      }
       

    });


  }



}
