import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FelipeTasksService {
  nome: string;
  idade: number;

  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.listRef = db.list('list');
    this.list = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  addItem() {
    this.listRef.push({
      nome: this.nome,
      idade: this.idade,
    });
    this.nome = null;
    this.idade = null;
  }

  deleteItem(key: string) {
    this.listRef.remove(key);
  }
}
