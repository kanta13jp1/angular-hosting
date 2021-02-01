import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {id: 13, name: '舟山康江', belongs: '参議院', bio: '政調会長', twitter: 'yasue_funayama0', image: 'assets/funayamayasue.jpg'}),
      new AdItem(HeroProfileComponent, {id: 1, name: '玉木雄一郎', belongs: '衆議院', bio: '代表', twitter: 'tamakiyuichiro', image: 'assets/tamakiyuuichiro.jpg'}),
      new AdItem(HeroProfileComponent, {id: 3, name: '伊藤孝恵', belongs: '参議院', bio: '副代表', twitter: 'itotakae0630', image: 'assets/itotakae.jpg'}),
      new AdItem(HeroProfileComponent, {id: 4, name: '矢田わか子', belongs: '参議院', bio: '副代表', twitter: 'wako0501', image: 'assets/yatawakako.jpg'}),
      new AdItem(HeroProfileComponent, {id: 2, name: '山尾志桜里', belongs: '衆議院', bio: '広報局長', twitter: 'ShioriYamao', image: 'assets/yamaoshiori.jpg'}),
      new AdItem(HeroProfileComponent, {id: 2, name: '田村まみ', belongs: '参議院', bio: '会派', twitter: 'mamitamuratw', image: 'assets/tamuramami.jpg'}),

      // new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      // new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
      //                                   body: 'Submit your resume today!'}),

      // new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
      //                                   body: 'Apply today'}),
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
