import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {
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

  public reset(): void {
    this._store.dispatch(actions.reset());
  }
}
