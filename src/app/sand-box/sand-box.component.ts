import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import AsyncLock from 'Async-lock';
import { HeroService } from '../heroes/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../heroes/hero';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.styl']
})
export class SandBoxComponent implements OnInit {
  currentCount = 0;
  articles: any;
  promiseSetByCreateArticle: any;
  promiseSetByDeleteArticle: any;
  promiseSetByListArticle: any;
  promiseSetByCreateArticleByHero: any;
  promiseSetByGetHero: any;
  msg: any;
  hero: Hero | undefined;
  hero$: Observable<Hero>;
  interval: any;

  constructor(
    private service: HeroService,
  ) {}

  async ngOnInit(): Promise<void> {
    console.log("ngOnInit()")
    if (!firebase.apps.length) {
      const resp = await fetch('/__/firebase/init.json');
      const config = await resp.json();
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    this.getHero(1);
    await this.listArticle();
  }

  getHero(id: number | string): void {
    this.service.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getHeroFromDB(id: number | string): void {
    this.service.getHero(id)
      .subscribe(hero => this.hero = hero);
    this.promiseSetByListArticle = firebase.functions().httpsCallable('getArticle')();
    let res = this.promiseSetByListArticle;
    this.articles = res.data;
    console.log(this.articles)
  }

  public incrementCounter() {
    this.currentCount++;
  }

  public async createArticle(value: string) {
    const lock = new AsyncLock();
    lock.acquire("createArticle", () => {});
    console.log("sand-box: createArticle() >")
    this.promiseSetByCreateArticle = this.createArticleProcess(value);
    await this.promiseSetByCreateArticle;
    console.log("sand-box: createArticle() <")
    this.msg = `create ${value}!!`;
    await this.listArticle();
  }

  public async createArticleByHero(value: any) {
    const lock = new AsyncLock();
    lock.acquire("createArticleByHero", () => {});
    console.log("sand-box: createArticleByHero() >")
    this.promiseSetByCreateArticle = this.createArticleByHeroProcess(value);
    await this.promiseSetByCreateArticle;
    console.log("sand-box: createArticleByHero() <")
    this.msg = `create ${value}!!`;
    await this.listArticle();
  }

  private async createArticleProcess(value: string) {
    let res = await firebase.functions().httpsCallable('listArticle')();
    const func = firebase.functions().httpsCallable('createArticle');
    let result = await func({ id: res.data.length + 1, name: value })
    console.log("result = ",result);
  }

  private async createArticleByHeroProcess(value: any) {
    const func = firebase.functions().httpsCallable('createArticle');
    let result = await func(value)
    console.log("result = ",result);
  }

  public async listArticle() {
    const lock = new AsyncLock();
    lock.acquire("listArticle", async () => {});
    console.log("sand-box: listArticle()")
    this.promiseSetByListArticle = await firebase.functions().httpsCallable('listArticle')();
    let res = await this.promiseSetByListArticle;
    this.articles = res.data;
    console.log(this.articles)
  }

  public async deleteArticle() {
    const lock = new AsyncLock();
    lock.acquire("deleteArticle", () => {});
    console.log("sand-box: deleteArticle() > ")
    this.promiseSetByDeleteArticle = this.deleteArticleProcess();
    await this.promiseSetByDeleteArticle;
    console.log("sand-box: deleteArticle() < ")
    await this.listArticle();
  }

  public async deleteArticleProcess() {
    let res = await firebase.functions().httpsCallable('listArticle')();

    const func = firebase.functions().httpsCallable('deleteArticle');
    let result = await func({ id: res.data.length })
    console.log("result = ", result);
  }
}
