import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-local-candidate',
  templateUrl: './local-candidate.component.html',
  styleUrls: ['./local-candidate.component.scss']
})
export class LocalCandidateComponent implements OnInit {
  heroes!: Hero[];
  recommends!: Hero[];
  block: string;
  nowDate: Date;
  koujibi: Date;
  tohyobi: Date;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getLocalCandidates();
    this.nowDate = new Date();
    this.koujibi = new Date("2023/3/31");
    this.tohyobi = new Date("2023/4/9");
    this.getLocalCandidates();
    this.filterRecommend();
  }

  getDiffDays(sDate, eDate) {
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);

    var Time = endDate.getTime() - startDate.getTime();
    return Math.floor(Time / (1000 * 3600 * 24));
  }

  getLocalCandidates(): void {
    this.heroService.getLocalCandidates()
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.filterRecommend();
    this.block = '全候補者'
  }

  filterRecommend(): void {
    this.heroService.searchLocalCandidatesByLisence('推薦')
      .subscribe(recommends => this.recommends = recommends.slice(0, 100));
  }

  filterBlock(block: string) {
    console.log("filterBlock()" + block);
    this.heroService.searchLocalCandidatesByCandidateDistrictBlock(block)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    console.log(this.heroes);
    this.heroService.searchRecommendLocalCandidatesByCandidateDistrictBlock(block, '推薦')
      .subscribe(recommends => this.recommends = recommends.slice(0, 100));
    console.log(this.recommends);
    this.block = block + 'ブロック'
  }

  filterHokkaido(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('北海道')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterTohoku(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('東北')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

    filterHokurikuShinetsu(): void {
      this.heroService.searchCandidatesByCandidateDistrictBlock('北陸信越')
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    }

  filterKitaKantou(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('北関東')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterTokyo(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('東京')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterMinamiKantou(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('南関東')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterTokai(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('東海')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterKinki(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('近畿')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterChugoku(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('中国')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterShikoku(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('四国')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterKyushu(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('九州')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }
}
