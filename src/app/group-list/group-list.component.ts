import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: [ './group-list.component.scss' ]
})
export class GroupListComponent implements OnInit {
  heroes!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getGroupHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.heroService.searchGroupHeroes(term)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterShu(): void {
    this.heroService.searchGroupHeroesByBelongs('衆議院')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterSan(): void {
    this.heroService.searchGroupHeroesByBelongs('参議院')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

}
