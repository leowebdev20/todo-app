import { TodosService } from './../../services/todos.service';
import { Component } from "@angular/core";

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  text: string = '';

  constructor(private todosService: TodosService) {
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addToDo(): void {
    this.todosService.addTodo(this.text)
    this.text = '';
  }

}

