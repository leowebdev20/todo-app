import { FilterEnum } from './../../types/filter.enum';
import { TodosService } from './../../services/todos.service';
import { TodoInterface } from './../../types/todo.interface';
import { Component } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
})

export class MainComponent {
  visibleTodos$: Observable<TodoInterface[]>;

  constructor(private todosService: TodosService) {
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        }
        return todos;
      })
    )
  }
};
