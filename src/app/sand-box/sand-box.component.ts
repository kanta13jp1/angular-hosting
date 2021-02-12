import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import AsyncLock from 'Async-lock';
@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.styl']
})
export class SandBoxComponent implements OnInit {
  public currentCount = 0;
  public articles: any;
  public promiseSetByCreateArticle: any;
  public promiseSetByDeleteArticle: any;
  public promiseSetByListArticle: any;
  public msg: any;

  constructor() { }

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

  private async createArticleProcess(value: string) {
    let res = await firebase.functions().httpsCallable('listArticle')();
    const func = firebase.functions().httpsCallable('createArticle');
    let result = await func({ id: res.data.length + 1, name: value })
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
