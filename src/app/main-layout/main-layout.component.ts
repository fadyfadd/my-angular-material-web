 
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy , Input , Output , EventEmitter } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  //private _mobileQueryListener: () => void;
  @Output()
  showLogin: EventEmitter<boolean> = new EventEmitter();
  displayMode = "none";

  @Input()
  set isVisible(isVisible:Boolean) {
      if (isVisible == true)
        this.displayMode = "block";
      else
        this.displayMode = "none";
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher , router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);
  }

  showLoginScreen() {
      this.showLogin.emit(true);
  }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 
  ngOnInit(): void {
  }

}
