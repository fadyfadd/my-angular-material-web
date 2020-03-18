import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpinnerController} from './spinner-controler'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {


  @ViewChild('progressDiv', { static: true })
  progressDiv: ElementRef;

  constructor(private spinnerController:SpinnerController) {

  }

  ngAfterViewInit(): void {
    this.spinnerController.getMessage().subscribe(m => {
      if (m > 0) {
        this.progressDiv.nativeElement.style.display = "block";

      }
      else {

        this.progressDiv.nativeElement.style.display = "none";
      }
    })
  }


  ngOnInit() {
  }

}
