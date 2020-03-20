import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
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

    ngOnInit() {
     
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
