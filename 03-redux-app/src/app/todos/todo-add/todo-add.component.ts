import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  public txtInput: FormControl;

  constructor(
    private _store: Store
  ) {
    this.txtInput = new FormControl('Hi', [Validators.required]);
  }

  ngOnInit(): void {
  }

  public add(): void {
    if (this.txtInput.invalid) {
      return;
    }
    this._store.dispatch(actions.create({text: this.txtInput.value}));
    this.txtInput.reset();
  }
}
