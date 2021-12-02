import { Component, OnInit } from '@angular/core';
import { FelipeTasksService } from '../felipe-tasks.service';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-felipe-tasks',
  templateUrl: './felipe-tasks.component.html',
  styleUrls: ['./felipe-tasks.component.css'],
})
export class FelipeTasksComponent implements OnInit {
  nome: string;
  idade: number;

  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(public tarefa: FelipeTasksService) {}

  ngOnInit() {}

  addItem() {
    this.tarefa.addItem();
  }

  deleteItem(key: string) {
    this.tarefa.deleteItem(key);
  }
}
