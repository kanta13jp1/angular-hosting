import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-local-candidate',
  templateUrl: './local-candidate.component.html',
  styleUrls: ['./local-candidate.component.styl']
})
export class LocalCandidateComponent implements OnInit {
  heroes!: Hero[];
  block: string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getLocalCandidates();
  }
  getLocalCandidates(): void {
    this.heroService.getLocalCandidates()
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.block = '全候補者'
  }

  filterBlock(block: string) {
    this.heroService.searchLocalCandidatesByCandidateDistrictBlock(block)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
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
