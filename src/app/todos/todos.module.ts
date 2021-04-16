import { MainComponent } from './components/main/main.component';
import { TodosService } from './services/todos.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
]

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent, TodoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
