import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import firebase from 'firebase';
import AsyncLock from 'Async-lock';
import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements AfterViewInit, OnInit  {
  promiseSetByListArticle: any;
  promiseSetByCreateArticle: any;
  promiseSetByCreateArticleByHero: any;
  msg: any;
  hero: Hero | undefined;
  hero$: Observable<Hero>;

  constructor(
    private heroService: HeroService,
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
    await this.listArticle();
    this.getHeroes();
  }

  ngAfterViewInit(): void {
    // TODO: 表示後処理
  }

  memory = [
    {name: "memory"}
  ];

  db = [
    {name: "db"}
  ];

  getHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe(memory => this.memory = memory.slice(0, 100));
  }

  getHero(id: number | string): void {
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  public async listArticle() {
    const lock = new AsyncLock();
    lock.acquire("listArticle", async () => {});
    console.log("drag-drop.component.ts: listArticle()")
    this.promiseSetByListArticle = await firebase.functions().httpsCallable('listArticle')();
    let res = await this.promiseSetByListArticle;
    this.db = res.data;
    console.log(this.db)
  }


  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("drop() to same container");
      console.log("drop() event.container.data = ", event.container.data);
      console.log("drop() event.previousIndex = ", event.previousIndex);
      console.log("drop() event.currentIndex = ", event.currentIndex);
      console.log("drop() event.container.data[event.currentIndex] = ", event.container.data[event.currentIndex]);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      console.log("drop() to other container");
      console.log("drop() event.container.data = ", event.container.data);
      console.log("drop() event.previousIndex = ", event.previousIndex);
      console.log("drop() event.currentIndex = ", event.currentIndex);
      this.createArticleByHero(event.container.data[event.currentIndex]);
      this.getHeroes();
    }
  }

  public async createArticleByHero(value: any) {
    const lock = new AsyncLock();
    lock.acquire("createArticleByHero", () => {});
    console.log("drag-drop: createArticleByHero() >")
    this.promiseSetByCreateArticle = this.createArticleByHeroProcess(value);
    await this.promiseSetByCreateArticle;
    console.log("drag-drop: createArticleByHero() <")
    this.msg = `create ${value}!!`;
    // await this.listArticle();
  }

  private async createArticleByHeroProcess(value: any) {
    const func = firebase.functions().httpsCallable('createArticle');
    let result = await func(value)
    console.log("result = ",result);
  }

}
