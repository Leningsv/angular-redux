import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from './counter/counter.actions';
import {AppState} from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public counter: number;

  constructor(private _store: Store<AppState>) {
    this.counter = 10;
  }

  ngOnInit(): void {
    this._store.select('counter').subscribe(counter => {
      this.counter = counter;
      console.log(counter);
    });
  }

  public add(): void {
    this._store.dispatch(actions.increment());
    // this.counter++;
  }

  public dismiss(): void {
    this._store.dispatch(actions.decrement());
    // this.counter--;
  }

  public counterHandler(counter: number): void {
    this.counter = counter;
  }
}
