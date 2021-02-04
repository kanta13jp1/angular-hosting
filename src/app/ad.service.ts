import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {id: 13, name: '舟山康江', belongs: '参議院', district: '山形県選挙区', bio: '政調会長', twitter: 'yasue_funayama0', image: 'assets/funayamayasue.jpg', detail: '国民一人ひとりが豊かさを感じられる格差のない社会へ！\
      政権の暴走に歯止めをかけ、多様性のある社会を！'}),
      new AdItem(HeroProfileComponent, {id: 1, name: '玉木雄一郎', belongs: '衆議院', district: '香川2区', bio: '代表', twitter: 'tamakiyuichiro', image: 'assets/tamakiyuuichiro.jpg' , detail: '新しい政治の流れをつくる。'}),
      new AdItem(HeroProfileComponent, {id: 3, name: '伊藤孝恵', belongs: '参議院', district: '愛知県選挙区', bio: '副代表', twitter: 'itotakae0630', image: 'assets/itotakae.jpg' , detail: '子育て\
      介護\
      働くことの両立が\
      こんなに息苦しくない社会を創りたい\
      子どもを愛し育てること\
      仕事を全うすること\
      大切な人を介護すること\
      この当たり前の営みの両立が\
      こんなに息苦しくない社会を創りたい'}),
      new AdItem(HeroProfileComponent, {id: 4, name: '矢田わか子', belongs: '参議院', district: '比例区', bio: '副代表', twitter: 'wako0501', image: 'assets/yatawakako.jpg' , detail: 'あなたと動けば、未来は変わる。'}),
      new AdItem(HeroProfileComponent, {id: 2, name: '山尾志桜里', belongs: '衆議院', district: '愛知7区', bio: '広報局長', twitter: 'ShioriYamao', image: 'assets/yamaoshiori.jpg' , detail: 'what is essential is invisible to the eye'}),
      new AdItem(HeroProfileComponent, {id: 26, name: '田村まみ', belongs: '参議院', district: '比例区', bio: '会派', twitter: 'mamitamuratw', image: 'assets/tamuramami.jpg' , detail: '働く｢仲間｣の\
      ｢笑顔｣のために'}),
      new AdItem(HeroProfileComponent, {id: 20, name: '高橋みほ', belongs: '衆議院公認内定予定候補', district: '静岡1区', bio: '候補', twitter: '', image: 'assets/takahashimiho.jpg' , detail: '静岡市上足洗生まれで、静岡っ子。\
      地元静岡を愛するちゃっきり娘！\
      「将来への不安」を解消するため、賃金アップ、非正規雇用の正規雇用化、年金制度の安心化を目指します！\
      ふじ幼稚園・千代田・千代田東小学校・麻機小学校卒業卒、観山中学校卒・静岡高校卒・神戸大学法学部卒・北海道大学公共政策大学院修了。元衆議院議員。街の法律家である行政書士。'}),
      new AdItem(HeroProfileComponent, {id: 19, name: '佐藤由美', belongs: '衆議院公認内定予定候補', district: '東京24区', bio: '候補', twitter: 'yumibetterworld', image: 'assets/satoyumi.jpg' , detail: '元都議。日本司法支援センター（法テラス）で\
      個別支援と司法制度改革に取組10年「一人ひとりの声を形に」を掲げ都議初当選。\
      社会課題・構造変化に応じ政策を転換「一人ひとりの政治参画」「多様性ある社会」\
      「開かれた外交・平和」が柱。次世代に希望ある社会を。都立戸山高、京都大法卒。\
      英国ブリストル大学院公共政策修士。母としても奮闘中'}),

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
