import { TodosService } from './../../services/todos.service';
import { TodoInterface } from './../../types/todo.interface';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit, OnChanges {

  @Input('todo') todoProps: TodoInterface;
  @Input('isEditing') isEditingProps: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter();

  editingText: string = '';
  @ViewChild('textInput') textInput: ElementRef;

  constructor(private todosSerive: TodosService) {}

  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isEditingProps.currentValue) {
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      }, 0);
    }
  }

  setTodoinEditMode() {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  removeTodo(): void {
    this.todosSerive.removeTodo(this.todoProps.id);
  }

  toggleTodo(): void {
    this.todosSerive.toggleTodo(this.todoProps.id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;

  }

  changeTodo(): void {
    this.todosSerive.changeTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }

}
