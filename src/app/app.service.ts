import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  addTodo(todo: Todo) {
    return this.http.post(`${this.baseUrl}/todos`, todo);
  }

  updateTodo(todo: Todo) {
    return this.http.patch(`${this.baseUrl}/todos/${todo.id}`, todo);
  }

  deleteTodo(id: Todo['id']) {
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }
}
