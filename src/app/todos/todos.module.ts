import { TodosService } from './services/todos.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { HeaderComponent } from 'src/app/todos/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
]

@NgModule({
  declarations: [TodosComponent, HeaderComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
