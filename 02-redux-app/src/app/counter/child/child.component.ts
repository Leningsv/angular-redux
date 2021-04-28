import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
  public counter: number;

  constructor(
    private _store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this._store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  public multiply(): void {
    this._store.dispatch(actions.multiply({number: 5}));
  }

  public divide(): void {
    this._store.dispatch(actions.divide({number: 5}));
  }
}
