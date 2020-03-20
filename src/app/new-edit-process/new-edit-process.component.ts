import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  mode: string;
}

@Component({
  selector: 'app-new-edit-process',
  templateUrl: './new-edit-process.component.html',
  styleUrls: ['./new-edit-process.component.css']
})
export class NewEditProcessComponent  {
  constructor(
    
    public dialogRef: MatDialogRef<NewEditProcessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onCancel() {
      this.dialogRef.close();
    }

    onSave() {
      this.dialogRef.close();
    }

    ngOnInit() {
     
    }

 

}
