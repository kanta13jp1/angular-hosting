import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '玉木雄一郎', role: '代表', belongs: '衆議院', almaMater: '東京大学法学部', district: '香川2区', count: 4, twitter: 'tamakiyuichiro', wikipedia: '玉木雄一郎', birthday: '' },
      { id: 2, name: '山尾志桜里', role: '広報局長', role2: '憲法調査会長', belongs: '衆議院', almaMater: '東京大学法学部', district: '愛知7区', count: 3, twitter: 'ShioriYamao' },
      { id: 3, name: '伊藤孝恵', role: '副代表', belongs: '参議院', almaMater: '金城学院大学文学部国文学科', district: '愛知県選挙区', twitter: 'itotakae0630' },
      { id: 4, name: '矢田わか子', role: '副代表', belongs: '参議院', almaMater: '大阪府立寝屋川高等学校', district: '比例区', twitter: 'wako0501', wikipedia: '矢田稚子', birthday: '1965/9/25' },
      { id: 5, name: '岸本周平', role: '幹事長代理', belongs: '衆議院', almaMater: '東京大学法学部', district: '和歌山1区', twitter: 'shuheikishimoto' },
      { id: 6, name: '西岡秀子', role: '政務調査会長代理', belongs: '衆議院', almaMater: '', district: '', twitter: '' },
      { id: 7, name: '浅野哲', role: '国対委員長代理', belongs: '衆議院', almaMater: '', district: '', twitter: '' },
      { id: 8, name: '榛葉賀津也', role: '幹事長', belongs: '参議院', almaMater: 'オタバイン大学政治経済学部・国際問題研究学部', district: '静岡県選挙区', twitter: 'SHIMBA_OFFICE', birthday: '1967/4/25' },
      { id: 9, name: '古川元久', role: '国対委員長', belongs: '衆議院', almaMater: '', district: '', twitter: '' },
      { id: 10, name: '足立信也', role: '組織・団体委員長', belongs: '参議院', almaMater: '', district: '', twitter: '' },
      { id: 11, name: '小林正夫', role: '倫理委員長', belongs: '参議院', almaMater: '', district: '', twitter: '' },
      { id: 12, name: '浜野善史', role: '財務局長', belongs: '参議院', almaMater: '神戸大学経済学部', district: '', twitter: '' },
      { id: 13, name: '舟山康江', role: '政務調査会長', belongs: '参議院', almaMater: '北海道大学農学部農業経済学科', district: '	山形県選挙区', twitter: 'yasue_funayama0' },
      { id: 14, name: '川合孝典', role: '参議院国会対策委員長', belongs: '参議院', almaMater: '', district: '', twitter: ''},
      { id: 15, name: '大塚耕平', role: '代表代行', belongs: '参議院', almaMater: '早稲田大学政治経済学部経済学科', district: '愛知県選挙区', count: 4, twitter: 'kouhei1005mon', birthday: '1959/10/5' },
      { id: 16, name: '前原誠司', role: '代表代行', belongs: '衆議院', almaMater: '', district: '', twitter: '' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
