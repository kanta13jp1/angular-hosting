import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { Member } from './member';
import { MemberService } from './member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  heroes!: Member[];
  noentories!: Member[];
  block: string;
  promiseSetByListArticle: any;

  constructor(private memberService: MemberService) { }

  async ngOnInit(): Promise<void> {
    console.log("ngOnInit()")
    if (!firebase.apps.length) {
      const resp = await fetch('/__/firebase/init.json');
      const config = await resp.json();
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    this.getCandidates();
  }
  async getCandidates(): Promise<void> {
    this.promiseSetByListArticle = await firebase.functions().httpsCallable('listArticle');
    let res = await this.promiseSetByListArticle;
    this.heroes = res.data;
    this.memberService.getMemberes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.memberService.getCandidatesNoEntry('未定')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    this.block = '全候補者'
  }

  filterBlock(block: string) {
    this.memberService.searchCandidatesByCandidateDistrictBlock(block)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory(block)
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
      this.block = block + 'ブロック'
  }

  filterHokkaido(): void {
    this.block = '北海道'
    this.memberService.searchCandidatesByCandidateDistrictBlock(this.block)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
    this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory(this.block)
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
  }

  filterTohoku(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('東北')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('東北')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

    filterHokurikuShinetsu(): void {
      this.memberService.searchCandidatesByCandidateDistrictBlock('北陸信越')
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('北陸信越')
        .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterKitaKantou(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('北関東')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('北関東')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterTokyo(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('東京')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('東京')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterMinamiKantou(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('南関東')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('南関東')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

  filterTokai(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('東海')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('東海')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

  filterKinki(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('近畿')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('近畿')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

    filterChugoku(): void {
      this.memberService.searchCandidatesByCandidateDistrictBlock('中国')
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('中国')
        .subscribe(noentories => this.noentories = noentories.slice(0, 100));

    }

  filterShikoku(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('四国')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('四国')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

  filterKyushu(): void {
    this.memberService.searchCandidatesByCandidateDistrictBlock('九州')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.memberService.searchCandidatesByCandidateDistrictBlockNoEntory('九州')
      .subscribe(noentories => this.noentories = noentories.slice(0, 100));
    }

}
