import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  hero$: Observable<Hero>;
  interval: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Twitterウィジェットの読み込み
    this.interval = setInterval(() => {
        if (window['twttr']) {
          window[`twttr`].widgets.load(document.getElementsByClassName("twitter-timeline"));
          console.log('hero-detail.component.ts: window[`twttr`].widgets.load()');
        }
        clearInterval(this.interval);
    }, 2000);

    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
      );
    this.getHero();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.service.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
