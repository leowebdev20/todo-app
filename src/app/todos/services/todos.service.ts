import { FilterEnum } from './../types/filter.enum';
import { TodoInterface } from './../types/todo.interface';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    }
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
}
