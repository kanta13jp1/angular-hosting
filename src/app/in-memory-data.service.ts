import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '玉木雄一郎', role: '代表', belongs: '衆議院', almaMater: '東京大学法学部卒業', almaMater2: 'ハーバード大学ケネディスクール修了', district: '香川2区', count: 4, twitter: 'tamakiyuichiro', wikipedia: '玉木雄一郎', birthday: '1969/5/1', congressman: true, candidate: true, group: true, candidateType: '小選挙区', candidatedistrictblock: '四国', candidatePrefecture: '香川', candidatedistrict: '2区', image: 'assets/tamakiyuuichiro.jpg', hp: '	たまき雄一郎オフィシャルサイト', url: 'https://www.tamakinet.jp/', detail: '新しい政治の流れをつくる。' },
      { id: 2, name: '山尾志桜里', role: '広報局長', role2: '憲法調査会長', belongs: '衆議院', almaMater: '東京大学法学部', district: '愛知7区', count: 3, twitter: 'ShioriYamao', congressman: true, candidate: true, group: true, candidateType: '比例代表', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: 'ブロック単独１位', image: 'assets/yamaoshiori.jpg', hp: '山尾志桜里', url: 'https://yamaoshiori.jp/', detail: 'what is essential is invisible to the eye' },
      { id: 3, name: '伊藤孝恵', role: '副代表', belongs: '参議院', almaMater: '金城学院大学文学部国文学科', district: '愛知県選挙区',　count: 1, twitter: 'itotakae0630', congressman: true, group: true, image: 'assets/itotakae.jpg', hp: '伊藤たかえ Official Site', url: 'https://itoutakae.info/', detail: '子育て\n\
介護\n\
働くことの両立が\n\
こんなに息苦しくない社会を創りたい\n\
子どもを愛し育てること\n\
仕事を全うすること\n\
大切な人を介護すること\n\
この当たり前の営みの両立が\n\
こんなに息苦しくない社会を創りたい'},
      { id: 4, name: '矢田わか子', role: '副代表', belongs: '参議院', almaMater: '大阪府立寝屋川高等学校', district: '比例区', count: 1, twitter: 'wako0501', wikipedia: '矢田稚子', birthday: '1965/9/25', congressman: true, group: true, image: 'assets/yatawakako.jpg', hp: '矢田わか子 参議院議員 国民民主党参議院比例区第8総支部長', url: 'https://yatawaka.com/', detail: 'あなたと動けば、未来は変わる。'  },
      { id: 5, name: '岸本周平', role: '幹事長代理', role2: '両院議員総会長', belongs: '衆議院', almaMater: '東京大学法学部', district: '和歌山1区', count: 4, twitter: 'shuheikishimoto', congressman: true, candidate: true, group: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '和歌山', candidatedistrict: '1区', image: 'assets/kishimotoshuuhei.jpg'  },
      { id: 6, name: '西岡秀子', role: '政務調査会長代理', belongs: '衆議院', almaMater: '学習院大学法学部', district: '長崎1区', count: 1, twitter: '', congressman: true, candidate: true, group: true, candidateType: '小選挙区', candidatedistrictblock: '九州', candidatePrefecture: '長崎', candidatedistrict: '1区', image: 'assets/nishiokahideko.jpg'  },
      { id: 7, name: '浅野哲', role: '国対委員長代理', belongs: '衆議院', almaMater: '青山学院大学大学院理工学研究科', district: '茨城5区', count: 1, twitter: 'Asano__Satoshi', congressman: true, candidate: true, group: true, candidateType: '小選挙区', candidatedistrictblock: '北関東', candidatePrefecture: '茨城', candidatedistrict: '5区', image: 'assets/asanosatoshi.jpg'  },
      { id: 8, name: '榛葉賀津也', role: '幹事長', belongs: '参議院', almaMater: 'オタバイン大学政治経済学部・国際問題研究学部', district: '静岡県選挙区', count: 4, twitter: 'SHIMBA_OFFICE', birthday: '1967/4/25', congressman: true, group: true, image: 'assets/shinbakazuya.jpg'   },
      { id: 9, name: '古川元久', role: '国対委員長', belongs: '衆議院', almaMater: '東京大学法学部', almaMater2:'コロンビア大学国際公共政策大学院' ,district: '愛知2区', count: 8, twitter: 'Fullgen', congressman: true, candidate: true, group: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '愛知', candidatedistrict: '2区', image: 'assets/furukawamotohisa.jpg', hp: '古川元久オフィシャルサイト', url: 'https://furukawa.cc/', detail: '道をひらく\n\
政治をめざした原点に立ち戻って' },
      { id: 10, name: '足立信也', role: '組織・団体委員長', belongs: '参議院', almaMater: '筑波大学医学専門学群', district: '大分県選挙区', count: 1, twitter: '', congressman: true, group: true, image: 'assets/adachishinya.jpg' },
      { id: 11, name: '小林正夫', role: '倫理委員長', belongs: '参議院', almaMater: '東京都立世田谷工業高等学校電気科', district: '比例区',count: 3, twitter: '', congressman: true, group: true, image: 'assets/kobayashimasao.jpg' },
      { id: 12, name: '浜野喜史', role: '財務局長', belongs: '参議院', almaMater: '神戸大学経済学部', district: '比例区', count: 2, twitter: '', congressman: true, group: true, image: 'assets/hamanoyoshifumi.jpg' },
      { id: 13, name: '舟山康江', role: '政務調査会長', role2: '農林水産調査会長', belongs: '参議院', almaMater: '北海道大学農学部農業経済学科', district: '山形県選挙区', count: 2, twitter: 'yasue_funayama0', congressman: true, group: true, image: 'assets/funayamayasue.jpg', hp: '舟山やすえオフィシャルサイト', url : 'https://www.y-funayama.jp/', detail: '国民一人ひとりが豊かさを感じられる格差のない社会へ！\n\
政権の暴走に歯止めをかけ、多様性のある社会を！' },
      { id: 14, name: '川合孝典', role: '参議院国会対策委員長', belongs: '参議院', almaMater: '立命館大学法学部', district: '比例区', count: 2, twitter: 'T_KAWAI_SANGIIN', congressman: true, group: true, image: 'assets/kawaitakanori.jpg', hp: 'かわいたかのり公式WEBサイト', url : 'https://kawai-takanori.jp/', detail: 'ムダにしません。\n\
汗と税！\n\
実現します。\n\
安心社会' },
      { id: 15, name: '大塚耕平', role: '代表代行', belongs: '参議院', almaMater: '早稲田大学政治経済学部経済学科', district: '愛知県選挙区', count: 4, twitter: 'kouhei1005mon', birthday: '1959/10/5', congressman: true, group: true, image: 'assets/otsukakouhei.jpg' },
      { id: 16, name: '前原誠司', role: '代表代行', belongs: '衆議院', almaMater: '', district: '京都2区', count: 9, twitter: 'Maehara2016', congressman: true, candidate: true, group: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '京都', candidatedistrict: '2区', image: 'assets/maeharaseiji.jpg'  },
      { id: 17, name: '樽井良和', role: '', belongs: '衆議院', almaMater: '', district: '', count: 2, twitter: '', congressman: false, candidate: true, group: false, candidateType: '小選挙区', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: '10区', image: 'assets/taruiyoshikazu.jpg'  },
      { id: 18, name: '円より子', role: '', belongs: '衆議院', almaMater: '津田塾大学学芸学部英文学科', district: '', count: 3, twitter: '', congressman: false, group: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: '17区', image: 'assets/madokayoriko.jpg' },
      { id: 19, name: '佐藤由美', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東京', candidatePrefecture: '東京', candidatedistrict: '24区', image: 'assets/satoyumi.jpg', detail: '元都議。日本司法支援センター（法テラス）で\n\
個別支援と司法制度改革に取組10年「一人ひとりの声を形に」を掲げ都議初当選。\n\
社会課題・構造変化に応じ政策を転換「一人ひとりの政治参画」「多様性ある社会」\n\
「開かれた外交・平和」が柱。次世代に希望ある社会を。都立戸山高、京都大法卒。\n\
英国ブリストル大学院公共政策修士。母としても奮闘中' },
      { id: 20, name: '高橋美穂', role: '', belongs: '衆議院', almaMater: '神戸大学法学部', almaMater2: '北海道大学公共政策大学院', district: '北海道2区', count: 1, twitter: 'mihojimukyoku', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '静岡', candidatedistrict: '1区' ,image: 'assets/takahashimiho.jpg', hp: '高橋みほ公式webサイト', url: 'http://www.takahashi-miho.jp/', detail: '静岡市上足洗生まれで、静岡っ子。\n\
地元静岡を愛するちゃっきり娘！\n\
「将来への不安」を解消するため、賃金アップ、非正規雇用の正規雇用化、年金制度の安心化を目指します！\n\
ふじ幼稚園・千代田・千代田東小学校・麻機小学校卒業卒、観山中学校卒・静岡高校卒・神戸大学法学部卒・北海道大学公共政策大学院修了。元衆議院議員。街の法律家である行政書士。'},
      { id: 21, name: '浅野克彦', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: 'katsuhikoasano', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北関東', candidatePrefecture: '埼玉', candidatedistrict: '4区', image: 'assets/asanokatsuhiko.jpg', hp: 'あさの克彦｜国民民主党', url: 'https://asano-k.net/', detail: '国民民主党埼玉県第４区総支部長' },
      { id: 22, name: '鴇田敦', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '南関東', candidatePrefecture: '千葉', candidatedistrict: '5区' },
      { id: 23, name: '大谷由里子', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '岐阜', candidatedistrict: '2区', image: 'assets/otaniyuriko.jpg' },
      { id: 24, name: '田中健', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東海', candidatePrefecture: '静岡', candidatedistrict: '4区' },
      { id: 25, name: '長友慎治', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '九州', candidatePrefecture: '宮崎', candidatedistrict: '2区' },
      { id: 26, name: '田村まみ', role: '無所属', belongs: '参議院', almaMater: '同志社大学神学部', district: '比例区', count: 1, twitter: 'mamitamuratw', wikipedia: '田村麻美', congressman: false, candidate: false, group: true, candidateType: '', candidatedistrictblock: '', candidatePrefecture: '', candidatedistrict: '', image: 'assets/tamuramami.jpg', hp: '公式サイト	田村まみ - 働く｢仲間｣の｢笑顔｣のために', url: 'https://mamitamura.com/', detail: '働く｢仲間｣の\n\
｢笑顔｣のために'},
      { id: 27, name: '加藤健一', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '東北', candidatePrefecture: '山形', candidatedistrict: '2区', image: 'assets/katokenichi.jpg' },
      { id: 28, name: '高倉栄', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '2区', image: 'assets/takakurasakae.jpg' },
      { id: 29, name: '珍部芳裕', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '中国', candidatePrefecture: '島根', candidatedistrict: '2区', image: 'assets/chinbeyoshihiro.jpg' },
      { id: 30, name: '斎藤アレックス', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '滋賀', candidatedistrict: '1区', image: 'assets/saitoualex.jpg' },
      { id: 31, name: '佐藤泰樹', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, group: false, candidateType: '小選挙区', candidatedistrictblock: '近畿', candidatePrefecture: '兵庫', candidatedistrict: '3区', image: '' },
      { id: 32, name: '鈴木義弘', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, group: false, candidateType: '小選挙区', candidatedistrictblock: '北関東', candidatePrefecture: '埼玉', candidatedistrict: '14区', image: '' },
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
      { id: 47, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '1区' },
      { id: 48, name: '高井たかし', role: '無所属', belongs: '参議院', almaMater: '東京大学経済学部', district: '岡山1区', count: 3, twitter: 't_takai', wikipedia: '高井崇志', congressman: false, candidate: false, group: true, candidateType: '', candidatedistrictblock: '', candidatePrefecture: '', candidatedistrict: '', image: 'assets/takaitakashi.jpg' },
      { id: 49, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '1区' },
      { id: 50, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '3区' },
      { id: 51, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '4区' },
      { id: 52, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '5区' },
      { id: 53, name: '未定', role: '', belongs: '衆議院', almaMater: '', district: '', count: 0, twitter: '', congressman: false, candidate: true, candidateType: '小選挙区', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟', candidatedistrict: '6区' },
      { id: 54, name: '大内一也', role: '', election: '山口県議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', belongs: '', almaMater: '', district: '', count: 0, birthday: '1973/10/10', twitter: 'ouchi_kazuya', congressman: false, candidate: true, localcandidate: true, candidateType: '山口県議会議員選挙', license:'公認', newcomer:'新人', continuecount: 0, candidatedistrictblock: '中国', candidatePrefecture: '山口県', candidatedistrict: '周南市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/09/28c7b5986dcdd248f4ae69b2194d5c33.jpg', hp: '大内 一也', url: 'https://www.ouchikazuya.com/', detail: '1973年10月生まれ（周南市出身）\n\
      徳山幼稚園～ 徳山小学校～ 岐陽中学校～ 徳山高等学校を経て\n\
      1996年\n\
      山口大学経済学部卒業\n\
      同年、NTT（現NTT西日本）に入社\n\
      フレッツ立ち上げメンバーの一人\n\
      2005年\n\
      株式会社FCEエデュケーションに入社\n\
      子どものやる気と自信を育む教材作成\n\
      2012年\n\
      株式会社キャリア・クロップを設立\n\
      主に学生、若者向けに就職支援、研修を行う\n\
      2015年\n\
      千葉県鎌ケ谷市議会議員初当選\n\
      2017年\n\
      3月に民進党山口県第1区総支部長に着任\n\
      10月の第48回衆院選に山口1区から出馬\n\
      36,582票をいただくも敗戦\n\
      その後地元周南市にて介護職に関わる\n\
      2018年\n\
      6月に国民民主党山口県第1区総支部長に着任​\n\
      2019年\n\
      7月の第25回参院選に山口県選挙区から出馬\n\
      118,491票をいただくも落選\n\
      2021年　\n\
      10月に行われた第49回衆院選に山口1区から出馬\n\
      50,684票をいただくも落選\n\
      2022年　\n\
      3月に国民民主党山口県総支部連合会代表\n\
      4月に山口県参議院選挙区第1総支部長に着任' },
      { id: 55, name: '黒田太郎', role: '', election: '愛知県議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', belongs: '', almaMater: '', district: '名古屋市千種区', count: 0, twitter: 'kuroda__taro', congressman: false, candidate: true, localcandidate: true, candidateType: '愛知県議会議員選挙', license:'公認', newcomer:'現職', continuecount: 2, candidatedistrictblock: '東海', candidatePrefecture: '愛知県', candidatedistrict: '名古屋市千種区', image: 'https://new-kokumin.jp/wp-content/uploads/2021/03/62553641afa5e1e0423d5433bc782049-e1666146906691.jpg', detail: '1990年　東大経済学部卒業、日銀入行\n\
      2002年　大塚耕平参議院議員秘書\n\
      2014年　古川元久衆議院議員秘書\n\
      2015年　愛知県議会議員' },
      { id: 56, name: '森井元志', role: '', election: '愛知県議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'公認', newcomer:'現職', continuecount: 4, belongs: '愛知県議会', almaMater: '', district: '', count: 0, twitter: 'motoshimorii', congressman: false, candidate: true, localcandidate: true, candidateType: '愛知県議会議員選挙', candidatedistrictblock: '東海', candidatePrefecture: '愛知県', candidatedistrict: '名古屋市守山区', image: 'https://new-kokumin.jp/wp-content/uploads/2021/03/de24898cddb751a4459aa76c8650657e-scaled-e1665113999493.jpg' },
      { id: 57, name: '吉村大志郎', role: '', election: '宮崎県議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'Shiro117385631', congressman: false, candidate: true, localcandidate: true, candidateType: '宮崎県議会議員選挙', candidatedistrictblock: '九州', candidatePrefecture: '宮崎県', candidatedistrict: '宮崎市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/09/b24da5ed64f6211e448a7fb02074d10f-scaled-e1665131017481.jpg' },
      { id: 58, name: '中村健太郎', role: '', election: '田原市議会議員選挙', kokujibi: '2023/1/22', tohyobi: '2023/1/29', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'nkm27', birthday: '1993/07/25',congressman: false, candidate: true, localcandidate: false, candidateType: '田原市議会議員選挙', candidatedistrictblock: '東海', candidatePrefecture: '愛知県', candidatedistrict: '田原市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/12/IMG_0290-e1672116228794.jpg' },
      { id: 59, name: '松本怜子', role: '', election: '福岡市議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'reiko_mtsmt', birthday: '1995/03/17',congressman: false, candidate: true, localcandidate: true, candidateType: '福岡市議会議員選挙', candidatedistrictblock: '九州', candidatePrefecture: '福岡県', candidatedistrict: '福岡市西区', image: 'https://new-kokumin.jp/wp-content/uploads/2022/10/a88cfde7c2b863f894355db0dbcff514-e1667355369416.jpeg' },
      { id: 60, name: '岡田光正', role: '', election: '焼津市議会議員選挙', kokujibi: '2023/1/29', tohyobi: '2023/2/5', belongs: '焼津市議会', almaMater: '', district: '焼津市', count: 0, twitter: 'sizuoka35bank', birthday: '1952/12/09',congressman: false, candidate: true, localcandidate: false, candidateType: '焼津市議会議員選挙', license:'推薦', newcomer:'現職', continuecount: 3, candidatedistrictblock: '東海', candidatePrefecture: '静岡県', candidatedistrict: '焼津市', image: 'https://new-kokumin.jp/wp-content/uploads/2020/11/12ef64742fde89fb0594f0e371ce4818-e1671605011490.jpg' },
      { id: 61, name: '小名木勇人', role: '', election: '浜松市議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'推薦', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'isato_konagi', birthday: '1978/07/16',congressman: false, candidate: true, localcandidate: true, candidateType: '浜松市議会議員選挙', candidatedistrictblock: '東海', candidatePrefecture: '静岡県', candidatedistrict: '浜松市南区', image: 'https://new-kokumin.jp/wp-content/uploads/2022/10/d95784511884eae025a9c3e867694240-scaled.jpg' },
      { id: 62, name: '金野貴泰', role: '', election: '岩見沢市議会議員選挙', kokujibi: '2023/4/16', tohyobi: '2023/4/23', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: '', birthday: '1986/08/01',congressman: false, candidate: true, localcandidate: true, candidateType: '岩見沢市議会議員選挙', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '岩見沢市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/12/d01346d7352c029f49830e1b8e50399e.jpg' },
      { id: 63, name: '小川陽平', role: '', election: '北海道議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'yoheiogawa_DPFP', birthday: '1990/01/10',congressman: false, candidate: true, localcandidate: true, candidateType: '北海道議会議員選挙', candidatedistrictblock: '北海道', candidatePrefecture: '北海道', candidatedistrict: '札幌市中央区', image: 'https://new-kokumin.jp/wp-content/uploads/2022/10/f05c363e6bd1fa8ae802a3b2c35869cc-scaled-e1668133350492.jpg', detail: '株式会社オガワヤ　代表取締役' },
      { id: 64, name: '浅岡志麻', role: '', election: '愛媛県議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'mirailabo0913', birthday: '1974/11/01',congressman: false, candidate: true, localcandidate: true, candidateType: '愛媛県議会議員選挙', candidatedistrictblock: '四国', candidatePrefecture: '愛媛県', candidatedistrict: '松山市・上浮穴郡', image: 'https://new-kokumin.jp/wp-content/uploads/2022/09/dbfb83af6f81d0fbd3d05c130500f9f0-e1668421112462.jpg', detail: '1997年　松山大学人文学部英語英米文学科卒業\n\
      1998年　株式会社Egg & Chick入社\n\
      2000年　株式会社コンベックス入社\n\
      2018年　株式会社ミライ・ラボ創業\n\
      大学卒業後、子ども英語教室講師を経て、\n\
      採用コンサルティング会社に\n\
      創業メンバーとして参画。\n\
      中小企業の新卒・中途採用サポートや、\n\
      大学生の就職支援業務等に約１２年従事。\n\
      その後、2018年10月に\n\
      「自ら考え、自ら選び、自ら学ぶ」\n\
      “教えない”学習塾「STUDY BASEミライ∞ラボ」\n\
      を開校し5年目。\n\
      株式会社ミライ・ラボ 代表取締役\n\
      NPO法人こどものみらいプロジェクト\n\
      ゆめドリ愛媛サテライト 副事務局長\n\
      カナエルエヒメ 代表' },
      { id: 65, name: '鈴木一正', role: '', election: '秋田市議会議員選挙', kokujibi: '2023/4/16', tohyobi: '2023/4/23', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: '', birthday: '1985/08/20',congressman: false, candidate: true, localcandidate: true, candidateType: '秋田市議会議員選挙', candidatedistrictblock: '東北', candidatePrefecture: '秋田県', candidatedistrict: '秋田市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/11/1b2af150c88ff4794789b191cad51f75-scaled-e1670890234420.jpg', detail: 'ー' },
      { id: 66, name: '三澤寛人', role: '', election: '長岡市議会議員選挙', kokujibi: '2023/4/16', tohyobi: '2023/4/23', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'New__wind', birthday: '1996/01/20',congressman: false, candidate: true, localcandidate: true, candidateType: '長岡市議会議員選挙', candidatedistrictblock: '北陸信越', candidatePrefecture: '新潟県', candidatedistrict: '長岡市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/10/e75c78947d11ed00cbbb0cc7f3658583.jpeg', detail: 'ー' },
      { id: 67, name: '鎌田泰春', role: '', election: '和光市議会議員選挙', kokujibi: '2023/4/16', tohyobi: '2023/4/23', license:'公認', newcomer:'新人', continuecount: 0, belongs: '', almaMater: '', district: '', count: 0, twitter: 'KamadaYasuharu', birthday: '1995/04/28',congressman: false, candidate: true, localcandidate: true, candidateType: '和光市議会議員選挙', candidatedistrictblock: '北関東', candidatePrefecture: '埼玉県', candidatedistrict: '和光市', image: 'https://new-kokumin.jp/wp-content/uploads/2022/11/a83376b9e5cdef9700372e003e9c1279-e1669788919671.jpg', detail: 'ー' },
      { id: 68, name: '吉野正人', role: '', election: '目黒区議会議員選挙', kokujibi: '2023/4/16', tohyobi: '2023/4/23', license:'推薦', newcomer:'現職', continuecount: 3, belongs: '', almaMater: '', district: '', count: 0, twitter: 'yoshinomasato', birthday: '1966/07/30',congressman: false, candidate: true, localcandidate: true, candidateType: '目黒区議会議員選挙', candidatedistrictblock: '東京', candidatePrefecture: '東京都', candidatedistrict: '目黒区', image: 'https://new-kokumin.jp/wp-content/uploads/2021/03/1ef3ca677c5c710800efacd4a0db3d64-scaled-e1665113846580.jpg', detail: '八雲学童保育クラブ父母会長\n\
      八雲小PTA会長\n\
      区立小学校PTA連合会会長\n\
      目黒十中PTA会長\n\
      区立中学校PTA連合会役員\n\
      八雲小学校評議員\n\
      八雲の夏まつり実行委員長\n\
      目黒消防団第12分団部長\n\
      柿の木坂商和会副会長\n\
      八雲町会会計理事\n\
      東京高等学校親師会副会長\n\
      中央大学父母連絡会役員\n\
      駒澤大学教育後援会厚生部部長' },
      { id: 69, name: '岩佐祐一', role: '', election: '門川町議会議員選挙', kokujibi: '2023/2/14', tohyobi: '2023/2/19', license:'公認', newcomer:'現職', continuecount: 3, belongs: '', almaMater: '', district: '', count: 0, twitter: '', birthday: '1995/04/28',congressman: false, candidate: true, localcandidate: true, candidateType: '門川町議会議員選挙', candidatedistrictblock: '九州', candidatePrefecture: '宮崎県', candidatedistrict: '門川町', image: 'https://new-kokumin.jp/wp-content/uploads/2022/08/4ef54f1c9534aed6dc7b6d3a9fb9d3a2-scaled-e1668043348618.jpg', detail: '旭化成社員（延岡勤務）\n\
      門川町議会議員\n\
      町青少年健全育成協議会副会長' },
      { id: 70, name: '梅津庸成', role: '', election: '山形県議会議員選挙', kokujibi: '2023/3/31', tohyobi: '2023/4/9', license:'公認', newcomer:'現職', continuecount: 1, belongs: '山形県議会', almaMater: '', district: '', count: 0, twitter: 'umetsuyosei', birthday: '1967/02/23',congressman: false, candidate: true, localcandidate: true, candidateType: '山形県議会議員選挙', candidatedistrictblock: '東北', candidatePrefecture: '山形県', candidatedistrict: '山形市', image: 'https://new-kokumin.jp/wp-content/uploads/2021/03/4f606141d769635874791a06664fc7f9-scaled-e1668044727653.jpg', detail: '国民民主党山形県総支部連合会　政務調査会長（現）\n\
      山形県議会議員（現' },
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
