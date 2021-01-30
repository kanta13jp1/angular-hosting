import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = '国民民主党（勝手に自分用）ポータル';
  getAnimationData(outlet: RouterOutlet) {
    console.log("getAnimationData()");
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
