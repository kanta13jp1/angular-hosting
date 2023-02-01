import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.heroService.searchHeroes(term)
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterShu(): void {
    this.heroService.searchHeroesByBelongs('衆議院')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

  filterSan(): void {
    this.heroService.searchHeroesByBelongs('参議院')
      .subscribe(heroes => this.heroes = heroes.slice(0, 100));
  }

}
