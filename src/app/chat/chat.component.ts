import { Component, OnInit } from '@angular/core';
import { Comment } from '../class/chat';

const COMMENTS: Comment[] = [ // 追加
  { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
  { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
  { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
];
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit {
  content = '';
  public comments = COMMENTS; // 追加

  constructor() { }

  ngOnInit(): void {
  }

}
