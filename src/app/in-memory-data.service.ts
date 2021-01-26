import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '玉木雄一郎', role: '代表', belongs: '衆議院', almaMater: '東京大学法学部', district: '香川2区', count: 4, twitter: 'tamakiyuichiro', wikipedia: '玉木雄一郎', birthday: '', congressman: true, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '四国', candidatePrefecture: '香川', candidatedistrict: '2区', image: 'assets/tamakiyuuichiro.jpg' },
      { id: 2, name: '山尾志桜里', role: '広報局長', role2: '憲法調査会長', belongs: '衆議院', almaMater: '東京大学法学部', district: '愛知7区', count: 3, twitter: 'ShioriYamao', congressman: true, candidate: true, candidateType: '比例代表', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: 'ブロック単独１位', image: 'assets/yamaoshiori.jpg' },
      { id: 3, name: '伊藤孝恵', role: '副代表', belongs: '参議院', almaMater: '金城学院大学文学部国文学科', district: '愛知県選挙区',　count: 1, twitter: 'itotakae0630', congressman: true },
      { id: 4, name: '矢田わか子', role: '副代表', belongs: '参議院', almaMater: '大阪府立寝屋川高等学校', district: '比例区', count: 1, twitter: 'wako0501', wikipedia: '矢田稚子', birthday: '1965/9/25', congressman: true },
      { id: 5, name: '岸本周平', role: '幹事長代理', role2: '両院議員総会長', belongs: '衆議院', almaMater: '東京大学法学部', district: '和歌山1区', count: 4, twitter: 'shuheikishimoto', congressman: true, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '和歌山', candidatedistrict: '1区', image: 'assets/kishimotoshuuhei.jpg'  },
      { id: 6, name: '西岡秀子', role: '政務調査会長代理', belongs: '衆議院', almaMater: '学習院大学法学部', district: '長崎1区', count: 1, twitter: '', congressman: true, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '九州', candidatePrefecture: '長崎', candidatedistrict: '1区', image: 'assets/nishiokahideko.jpg'  },
      { id: 7, name: '浅野哲', role: '国対委員長代理', belongs: '衆議院', almaMater: '青山学院大学大学院理工学研究科', district: '茨城5区', count: 1, twitter: '', congressman: true, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北関東', candidatePrefecture: '茨城', candidatedistrict: '5区', image: 'assets/asanosatoshi.jpg'  },
      { id: 8, name: '榛葉賀津也', role: '幹事長', belongs: '参議院', almaMater: 'オタバイン大学政治経済学部・国際問題研究学部', district: '静岡県選挙区', twitter: 'SHIMBA_OFFICE', birthday: '1967/4/25', congressman: true },
      { id: 9, name: '古川元久', role: '国対委員長', belongs: '衆議院', almaMater: '', district: '', twitter: '', congressman: true, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '愛知', candidatedistrict: '2区', image: 'assets/furukawamotohisa.jpg' },
      { id: 10, name: '足立信也', role: '組織・団体委員長', belongs: '参議院', almaMater: '筑波大学医学専門学群', district: '大分県選挙区', count: 1, twitter: '', congressman: true },
      { id: 11, name: '小林正夫', role: '倫理委員長', belongs: '参議院', almaMater: '', district: '', twitter: '', congressman: true },
      { id: 12, name: '浜野善史', role: '財務局長', belongs: '参議院', almaMater: '神戸大学経済学部', district: '', twitter: '', congressman: true },
      { id: 13, name: '舟山康江', role: '政務調査会長', belongs: '参議院', almaMater: '北海道大学農学部農業経済学科', district: '	山形県選挙区', twitter: 'yasue_funayama0', congressman: true },
      { id: 14, name: '川合孝典', role: '参議院国会対策委員長', belongs: '参議院', almaMater: '', district: '', twitter: '', congressman: true },
      { id: 15, name: '大塚耕平', role: '代表代行', belongs: '参議院', almaMater: '早稲田大学政治経済学部経済学科', district: '愛知県選挙区', count: 4, twitter: 'kouhei1005mon', birthday: '1959/10/5', congressman: true },
      { id: 16, name: '前原誠司', role: '代表代行', belongs: '衆議院', almaMater: '', district: '京都2区', count: 9, twitter: 'Maehara2016', congressman: true, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '京都', candidatedistrict: '2区', image: 'assets/maeharaseiji.jpg'  },
      { id: 17, name: '樽井良和', role: '', belongs: '衆議院', almaMater: '', district: '', count: 2, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: '10区', image: 'assets/taruiyoshikazu.jpg'  },
      { id: 18, name: '円より子', role: '', belongs: '衆議院', almaMater: '津田塾大学学芸学部英文学科', district: '', count: 3, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: '17区' },
      { id: 19, name: '佐藤由美', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: '24区' },
      { id: 20, name: '高橋美穂', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '静岡', candidatedistrict: '1区' },
      { id: 21, name: '浅野克彦', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北関東', candidatePrefecture: '埼玉', candidatedistrict: '4区' },
      { id: 22, name: '鴇田敦', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '南関東', candidatePrefecture: '千葉', candidatedistrict: '5区' },
      { id: 23, name: '大谷由里子', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '岐阜', candidatedistrict: '2区' },
      { id: 24, name: '田中健', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '静岡', candidatedistrict: '4区' },
      { id: 25, name: '長友慎治', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '九州', candidatePrefecture: '宮崎', candidatedistrict: '2区' },
      { id: 27, name: '加藤健一', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東北', candidatePrefecture: '山形', candidatedistrict: '2区', image: 'assets/katokenichi.jpg' },
      { id: 28, name: '高倉栄', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '2区', image: 'assets/takakurasakae.jpg' },
      { id: 29, name: '珍部芳裕', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '中国', candidatePrefecture: '島根', candidatedistrict: '2区', image: 'assets/chinbeyoshihiro.jpg' },
      { id: 30, name: '斎藤アレックス', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '滋賀', candidatedistrict: '1区', image: 'assets/saitoualex.jpg' },
      { id: 31, name: '佐藤泰樹', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '兵庫', candidatedistrict: '3区', image: '' },
      { id: 32, name: '鈴木義弘', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北関東', candidatePrefecture: '埼玉', candidatedistrict: '14区', image: '' },
      { id: 26, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '1区' },
      { id: 33, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '2区' },
      { id: 34, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '3区' },
      { id: 35, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '4区' },
      { id: 36, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '5区' },
      { id: 37, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '6区' },
      { id: 38, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '7区' },
      { id: 39, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '8区' },
      { id: 40, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '9区' },
      { id: 41, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '10区' },
      { id: 42, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '11区' },
      { id: 43, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '12区' },
      { id: 44, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東北', candidatePrefecture: '青森', candidatedistrict: '1区' },
      { id: 45, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東北', candidatePrefecture: '青森', candidatedistrict: '2区' },
      { id: 46, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東北', candidatePrefecture: '青森', candidatedistrict: '3区' },
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
