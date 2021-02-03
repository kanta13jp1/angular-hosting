import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <div class="profile">
        <h3>議員プロフィール</h3>
        <h2>{{data.name}}</h2>
        <p>{{data.belongs}}</p>
        <img
          width="160"
          alt="No image"
          src={{data.image}}
        />
        <br>
        <strong>{{data.bio}}</strong>
      </div>
      <div class="detail"><h4>{{data.detail}}</h4></div>
    </div>
  `,
  styleUrls: ['./hero-profile.component.styl'],
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
