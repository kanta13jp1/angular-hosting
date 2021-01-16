import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '玉木雄一郎', role: '代表', belongs: '衆議院'},
      { id: 2, name: '山尾志桜里', role: '広報局長', belongs: '衆議院' },
      { id: 3, name: '伊藤孝恵', role: '副代表', belongs: '参議院' },
      { id: 4, name: '矢田わか子', role: '副代表', belongs: '参議院' },
      { id: 5, name: '岸本周平', role: '幹事長代理', belongs: '衆議院' },
      { id: 6, name: '西岡秀子', role: '政務調査会長代理', belongs: '衆議院' },
      { id: 7, name: '浅野哲', role: '国対委員長代理', belongs: '衆議院' },
      { id: 8, name: '榛葉賀津也', role: '幹事長', belongs: '衆議院' },
      { id: 18, name: '古川元久', role: '国対委員長', belongs: '衆議院' },
      { id: 19, name: '足立信也', role: '組織・団体委員長', belongs: '衆議院' },
      { id: 20, name: '小林正夫', role: '倫理委員長', belongs: '参議院' },
      { id: 21, name: '浜野', role: '', belongs: '衆議院' },
      { id: 22, name: '舟山康江', role: '政務調査会長', belongs: '衆議院' },
      { id: 23, name: '川合', role: '', belongs: '衆議院' },
      { id: 24, name: '大塚', role: '', belongs: '衆議院' },
      { id: 25, name: '前原誠司', role: '代表代行', belongs: '衆議院' }
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
