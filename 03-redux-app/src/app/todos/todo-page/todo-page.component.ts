import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  public complete: boolean;

  constructor(
    private _store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  public toggleAll(): void {
    this.complete = !this.complete;
    this._store.dispatch(actions.toggleAll({complete: this.complete}));
  }

}
