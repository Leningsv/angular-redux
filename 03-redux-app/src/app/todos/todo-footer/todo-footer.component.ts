import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {filterType, setFilter} from '../../filter/filter.actions';
import {deleteCompletes} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  public currentFilter: filterType;
  public filters: filterType[];
  public pendings: number;

  constructor(
    private _store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.filters = ['all', 'completed', 'pending'];
    this._store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.complete).length;
    });
  }

  public changeFilter(filter: filterType): void {
    this._store.dispatch(setFilter({filter}));
  }

  public deleteCompletes(): void {
    this._store.dispatch(deleteCompletes());
  }

}
