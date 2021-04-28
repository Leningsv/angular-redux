import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from './models/Todo';
import {filterType} from '../filter/filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterType): unknown {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.complete);
      case 'pending':
        return todos.filter(todo => !todo.complete);
      case 'all':
        return todos;
    }
  }

}
