import * as moment from 'moment'; // 追加

export class User { // Userの定義を追加
  uid: number;
  name: string;

  constructor(uid: number, name: string) {
    this.uid = uid;
    this.name = name;
  }

  deserialize() { // 追加
    return Object.assign({}, this);
  }
}

export class Comment { // Commentの定義を変更
  user: User;
  initial: string;
  content: string;
  date: number; // 追加
  key?: string; // 追加
  editFlag?: boolean; // 追加

  constructor(user: User, content: string) {
    this.user = user;
    this.initial = user.name.slice(0, 1);
    this.content = content;
    this.date = +moment(); // 追加
  }

  deserialize() { // 追加
    this.user = this.user.deserialize();
    return Object.assign({}, this);
  }

  // 追加時点の日付を反映
  setData(date: number, key: string): Comment { // 追加
    this.date = date;
    this.key = key; // 追加
    this.editFlag = false; // 追加
    return this;
  }
}
