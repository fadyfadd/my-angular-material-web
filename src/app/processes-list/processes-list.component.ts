import { Component, OnInit , ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IProcess } from './iprocess';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ViewEncapsulation } from '@angular/core';
import { SpinnerController } from '../spinner/spinner-controler';
import { AppSettings } from '../app-settings'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewEditProcessComponent , DialogData } from '../new-edit-process/new-edit-process.component'
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";





@Component({
  selector: 'app-processes-list',
  templateUrl: './processes-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./processes-list.component.css']
})
export class ProcessesListComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private http:HttpClient , private spinnerController: SpinnerController
  , private appSettings: AppSettings , public dialog: MatDialog) {
      

   }

   editProcess(id) {
     let dialogRef = this.dialog.open(NewEditProcessComponent , {width: '500px'  , data:{id:id , mode:'edit' }})

     dialogRef.afterClosed().subscribe(result => {  
       
    });

   }

  applyFilter(e) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.processesDs.filter = filterValue.trim();

  }
  
  processes: IProcess[] = null;
  displayedColumns: string[] = ['id', 'machineName', 'basePriority', 'mainWindowTitle' , 'action'];
  processesDs = new MatTableDataSource<IProcess>(this.processes);
  

  ngOnInit() { 

     let params:HttpParams = new HttpParams(); 
     let headers:HttpHeaders = new HttpHeaders(); 
    
     const httpOptions = {
      headers : headers,
      params : params
    };

    this.spinnerController.start();
    this.http.get<IProcess[]>(this.appSettings.parameters.baseRef +  "dataprovider/processes-list" , httpOptions ).pipe(tap(_ => { }),
      catchError((e, a) => { return [[]] })
    ).subscribe(a => {
      this.spinnerController.stop();      
      this.processes = a;  
      this.processesDs = new MatTableDataSource<IProcess>(this.processes);
      this.processesDs.paginator = this.paginator;
      this.processesDs.sort = this.sort;

    });
  }

}
