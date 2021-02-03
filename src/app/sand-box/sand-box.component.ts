import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sand-box',
  templateUrl: './sand-box.component.html',
  styleUrls: ['./sand-box.component.styl']
})
export class SandBoxComponent implements OnInit {
  public currentCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
