import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.styl']
})
export class CandidateListComponent implements OnInit {
  heroes!: Hero[];
  noentories!: Hero[];
  block: string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.heroService.getCandidates()
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.getCandidatesNoEntry('未定')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
      this.block = '全候補者'
  }

  filterBlock(block: string) {
    this.heroService.searchCandidatesByCandidateDistrictBlock(block)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory(block)
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
      this.block = block + 'ブロック'
  }

  filterHokkaido(): void {
    this.block = '北海道'
    this.heroService.searchCandidatesByCandidateDistrictBlock(this.block)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory(this.block)
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
  }

  filterTohoku(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('東北')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('東北')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

    filterHokurikuShinetsu(): void {
      this.heroService.searchCandidatesByCandidateDistrictBlock('北陸信越')
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('北陸信越')
        .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterKitaKantou(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('北関東')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('北関東')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterTokyo(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('東京')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('東京')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterMinamiKantou(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('南関東')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('南関東')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

  filterTokai(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('東海')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('東海')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

  filterKinki(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('近畿')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('近畿')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

    filterChugoku(): void {
      this.heroService.searchCandidatesByCandidateDistrictBlock('中国')
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('中国')
        .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterShikoku(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('四国')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('四国')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

  filterKyushu(): void {
    this.heroService.searchCandidatesByCandidateDistrictBlock('九州')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchCandidatesByCandidateDistrictBlockNoEntory('九州')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

}
