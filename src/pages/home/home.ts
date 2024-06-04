import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import todos from '../../data/todos';
import { TodoPage } from '../todo/todo';
import { AddTodoPage } from '../add-todo/add-todo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  todos:{
    id: number,
    title: string,
    description: string,
    complete: boolean
  }[];
  //위와 같은 배열은 객체나 인터페이스 선언해서 쓰는게 좋다. 여기서는 그냥 인라인에서 하자.

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ngOnInit(){
    this.todos = todos;
    //import해온 세개의 데이터를 바로 위에 클래스 위에 있는, todos에 넣는다.
  }

  openNewTodo(todoId) {
    this.navCtrl.push(TodoPage, { id: todoId});
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
  }

  openAddTodoModal() {
    let addTodoModal = this.modalCtrl.create(AddTodoPage);
    addTodoModal.onDidDismiss(newTodo => {
      if (newTodo) {
        // 새로운 할 일을 추가한다.
        this.todos.push({
          id: this.todos.length + 1,
          title: newTodo.title,
          description: newTodo.description,
          complete: newTodo.complete
        });
      }
    });
    addTodoModal.present();
  }
}