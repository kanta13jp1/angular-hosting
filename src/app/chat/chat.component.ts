import { Component, OnInit } from '@angular/core';
import { Comment, User } from '../class/chat';
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加
import { map } from 'rxjs/operators';

const CURRENT_USER: User = new User(1, 'Tanaka Jiro'); // 自分のUser情報を追加
const ANOTHER_USER: User = new User(2, 'Suzuki Taro'); // 相手のUser情報を追加

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit {
  public content = '';
  public comments: Observable<Comment[]>; // 更新
  public currentUser = CURRENT_USER;

  // DI（依存性注入する機能を指定）
  constructor(private db: AngularFirestore) {
    this.comments = db // 更新
      .collection<Comment>('comments', ref => {
        return ref.orderBy('date', 'asc');
      })
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(action => {
          // 日付をセットしたコメントを返す
          const data = action.payload.doc.data() as Comment;
          const key = action.payload.doc.id; // 追加
          const commentData = new Comment(data.user, data.content);
          commentData.setData(data.date, key); // 更新
          return commentData;
        })));
  }

  ngOnInit(): void {
  }

  // 新しいコメントを追加
  addComment(e: Event, comment: string) {
    e.preventDefault();
    if (comment) {
      this.db
        .collection('comments')
        .add(new Comment(this.currentUser, comment).deserialize()); // 更新
      this.content = '';
    }
  }

  // 編集フィールドの切り替え
  toggleEditComment(comment: Comment) { // 追加
    comment.editFlag = (!comment.editFlag);
  }

  // コメントを更新する
  saveEditComment(comment: Comment) { // 追加
    this.db
      .collection('comments')
      .doc(comment.key)
      .update({
        content: comment.content,
        date: comment.date
      })
      .then(() => {
        alert('コメントを更新しました');
        comment.editFlag = false;
      });
  }

  // コメントをリセットする
  resetEditComment(comment: Comment) { // 追加
    comment.content = '';
  }

  // コメントを削除する
  deleteComment(key: string) { // 追加
    this.db
      .collection('comments')
      .doc(key)
      .delete()
      .then(() => {
        alert('コメントを削除しました');
      });
  }
}
