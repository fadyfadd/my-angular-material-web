 
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy , Input } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  //private _mobileQueryListener: () => void;

  displayMode = "none";

  @Input()
  set isVisible(isVisible:Boolean) {
      if (isVisible == true)
        this.displayMode = "block";
      else
        this.displayMode = "none";
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 
  ngOnInit(): void {
  }

}
