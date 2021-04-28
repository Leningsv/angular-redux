import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/Todo';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {filterType} from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public filter: filterType;

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this._store.select('todos').subscribe(todos => {
    //   this.todos = [...todos];
    // });
    this._store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.filter = filter;
    });
  }

}
