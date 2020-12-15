import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'SHP-FrontEnd';

  mobileQueryMax:  MediaQueryList ;

  private _mobileQueryListener: ()=> void;

  constructor(changeDeterRef : ChangeDetectorRef, media : MediaMatcher){
    //mediaQueryList = window.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDeterRef.detectChanges();
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)');
    this.mobileQueryMax.addEventListener('change', this._mobileQueryListener);
    
  }

  ngOnDestroy() : void{
    this.mobileQueryMax.removeEventListener('change', this._mobileQueryListener);
  }

  //alert before active sidenav
  // onSayHi(text :String){
  //   alert(text);
  // }


}
