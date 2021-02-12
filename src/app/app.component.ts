import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = '国民民主党（勝手に自分用）ポータル';
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    // Twitterウィジェットの読み込み
    if (window['twttr']) {
      window[`twttr`].widgets.load(document.getElementsByClassName("sns-button"));
      console.log('app.components.ts: window[`twttr`].widgets.load()');
    }
    this.ads = this.adService.getAds();
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
