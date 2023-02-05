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
  dispblock: string;
  nowDate: Date;
  koujibi: Date;
  tohyobi: Date;
  checkboxes: {genshoku: boolean, shinjin: boolean, suigen: boolean, suishin: boolean};

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.nowDate = new Date();
    this.koujibi = new Date("2023/3/31");
    this.tohyobi = new Date("2023/4/9");
    this.checkboxes = { genshoku: true, shinjin: true, suigen: true, suishin: true};
    this.getLocalCandidates();
  }

  getDiffDays(sDate, eDate) {
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);

    var Time = endDate.getTime() - startDate.getTime();
    return Math.floor(Time / (1000 * 3600 * 24));
  }

  onCheckedChange(e: any) {
    const selectedInput: string = e.target.id;
    if (/genshoku/.test(selectedInput)) {
        console.log("genshoku " + !this.checkboxes.genshoku)
        this.checkboxes.genshoku = !this.checkboxes.genshoku;
    }
    else if (/shinjin/.test(selectedInput)) {
      console.log("shinjin " + !this.checkboxes.shinjin)
      this.checkboxes.shinjin = !this.checkboxes.shinjin;
    }
    else if (/suigen/.test(selectedInput)) {
      console.log("suigen " + !this.checkboxes.suigen)
      this.checkboxes.suigen = !this.checkboxes.suigen;
    }
    else if (/suishin/.test(selectedInput)) {
      console.log("suishin " + !this.checkboxes.suishin)
      this.checkboxes.suishin = !this.checkboxes.suishin;
    }
    this.updateList();
}

  updateList(): void {
    if (this.block == '全候補者') {
      this.getLocalCandidates();
    } else {
      this.filterBlock(this.block)
    }
  }

  getLocalCandidates(): void {
    if (this.checkboxes.genshoku && this.checkboxes.shinjin && this.checkboxes.suigen && this.checkboxes.suishin) {
      this.heroService.getLocalCandidates()
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.filterRecommend();
      } else if (this.checkboxes.genshoku && this.checkboxes.shinjin && this.checkboxes.suigen) {
        console.log("現職 + 新人 + 推薦現職")
        this.heroService.searchLocalCandidatesByLisence('公認')
            .subscribe(heroes => this.heroes = heroes.slice(0, 100))
        this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','現職')
            .subscribe(recommends => {
              this.recommends = recommends.slice(0, 100)
              this.heroes = this.heroes.concat(this.recommends)
            })
    } else if (this.checkboxes.genshoku && this.checkboxes.shinjin && this.checkboxes.suishin) {
            console.log("現職 + 新人 + 推薦新人")
            this.heroService.searchLocalCandidatesByLisence('公認')
                .subscribe(heroes => this.heroes = heroes.slice(0, 100))
            this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','新人')
                .subscribe(recommends => {
                  this.recommends = recommends.slice(0, 100)
                  this.heroes = this.heroes.concat(this.recommends)
                })

    } else if (this.checkboxes.genshoku && this.checkboxes.shinjin ) {
        console.log("現職 + 新人")
        this.heroService.searchLocalCandidatesByLisence('公認')
          .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.recommends = [];
      } else if (this.checkboxes.shinjin && this.checkboxes.suigen && this.checkboxes.suishin) {
        console.log("新人 + 推薦現職 + 推薦新人")
        this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','新人')
          .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.heroService.searchLocalCandidatesByLisence('推薦')
          .subscribe(recommends => {
            this.recommends = recommends.slice(0, 100)
            this.heroes = this.heroes.concat(this.recommends)});
          } else if (this.checkboxes.shinjin && this.checkboxes.suigen) {
            console.log("新人 + 推薦現職")
            this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','新人')
                .subscribe(heroes => this.heroes = heroes.slice(0, 100))
            this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','現職')
                .subscribe(recommends => {
                  this.recommends = recommends.slice(0, 100)
                  this.heroes = this.heroes.concat(this.recommends)
                })
              } else if (this.checkboxes.shinjin && this.checkboxes.suishin) {
                console.log("新人 + 推薦新人")
                this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','新人')
                    .subscribe(heroes => this.heroes = heroes.slice(0, 100))
                this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','新人')
                    .subscribe(recommends => {
                      this.recommends = recommends.slice(0, 100)
                      this.heroes = this.heroes.concat(this.recommends)
                    })
          } else if (this.checkboxes.shinjin) {
            console.log("新人のみ")
            this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','新人')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.recommends = [];
    } else if (this.checkboxes.genshoku && this.checkboxes.suigen && this.checkboxes.suishin) {
      console.log("現職 + 推薦現職 + 推薦新人")
      this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','現職')
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      this.heroService.searchLocalCandidatesByLisence('推薦')
        .subscribe(recommends => {
          this.recommends = recommends.slice(0, 100)
          this.heroes = this.heroes.concat(this.recommends)});
    } else if (this.checkboxes.suigen && this.checkboxes.suishin) {
      console.log("推薦現職 + 推薦新人")
      this.heroService.searchLocalCandidatesByLisence('推薦')
        .subscribe(heroes => {
          this.heroes = heroes.slice(0, 100)
          this.recommends = this.heroes});
    } else if (this.checkboxes.genshoku && this.checkboxes.suigen) {
      console.log("現職 + 推薦現職")
      this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','現職')
          .subscribe(heroes => this.heroes = heroes.slice(0, 100))
      this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','現職')
          .subscribe(recommends => {
            this.recommends = recommends.slice(0, 100)
            this.heroes = this.heroes.concat(this.recommends)
          })
        } else if (this.checkboxes.genshoku && this.checkboxes.suishin) {
          console.log("現職 + 推薦新人")
          this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','現職')
              .subscribe(heroes => this.heroes = heroes.slice(0, 100))
          this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','新人')
              .subscribe(recommends => {
                this.recommends = recommends.slice(0, 100)
                this.heroes = this.heroes.concat(this.recommends)
              })
        } else if (this.checkboxes.genshoku) {
        console.log("現職のみ")
        this.heroService.searchLocalCandidatesByLisenceAndNewcomer('公認','現職')
          .subscribe(heroes => this.heroes = heroes.slice(0, 100));
        this.recommends = [];
    }else if (this.checkboxes.suigen) {
      console.log("推薦現職のみ")
      this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','現職')
        .subscribe(heroes => {
          this.heroes = heroes.slice(0, 100)
          this.recommends = this.heroes});
    } else if (this.checkboxes.suishin) {
      console.log("推薦新人のみ")
      this.heroService.searchLocalCandidatesByLisenceAndNewcomer('推薦','新人')
      .subscribe(heroes => {
        this.heroes = heroes.slice(0, 100)
        this.recommends = this.heroes});
    }
    this.block = '全候補者'
    this.dispblock = this.block;
  }

  filterRecommend(): void {
    this.heroService.searchLocalCandidatesByLisence('推薦')
      .subscribe(recommends => this.recommends = recommends.slice(0, 100));
  }

  filterBlock(block: string) {
    console.log("filterBlock()" + block);
    if (this.checkboxes.genshoku && this.checkboxes.shinjin && this.checkboxes.suigen && this.checkboxes.suishin) {
      this.heroService.searchLocalCandidatesByCandidateDistrictBlock(block)
        .subscribe(heroes => this.heroes = heroes.slice(0, 100));
      console.log(this.heroes);
    }
    this.heroService.searchRecommendLocalCandidatesByCandidateDistrictBlock(block, '推薦')
      .subscribe(recommends => this.recommends = recommends.slice(0, 100));
    console.log(this.recommends);
    this.block = block;
    this.dispblock = this.block + 'ブロック'
  }
}
