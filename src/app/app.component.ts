import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeModule } from '../modules/prime.module';
import { Todo } from './todo';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet, PrimeModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  task = '';
  title = 'angular-primeng-todo';
  todos: Todo[] = [];

  @ViewChild('todoTask') todoTask: any;

  constructor(private service: AppService) { }
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.getTodoList().subscribe(res => {
      this.todos = res;
    });
  }
  updateTodo(event: CheckboxChangeEvent, todo: Todo) {
    this.service.updateTodo({ ...todo, completed: event.checked }).subscribe();
  }

  deleteTodo(event: unknown, id: Todo['id']) {
    this.service.deleteTodo(id).subscribe(() => this.getList());
  }

  addTodo() {
    this.service.addTodo({ task: this.task, completed: false }).subscribe(() => {
      this.todoTask.reset();
      this.getList()
    });
  }
}
