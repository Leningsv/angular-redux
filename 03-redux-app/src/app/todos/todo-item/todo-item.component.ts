import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/Todo';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo: Todo;
  @ViewChild('idTxtInput')
  public idTxtInput: ElementRef;
  public isComplete: FormControl;
  public txtInput: FormControl;
  public isEditMode: boolean;

  constructor(
    private _store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.isComplete = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.isComplete.valueChanges.subscribe(value => {
      this._store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  public edit(): void {
    this.isEditMode = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.idTxtInput.nativeElement.select();
    }, 1);
  }

  public endEdition(): void {
    this.isEditMode = false;
    if (this.txtInput.invalid) {
      return;
    }
    this._store.dispatch(actions.edit({id: this.todo.id, text: this.txtInput.value}));
  }

  public delete(): void {
    this._store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }
}
