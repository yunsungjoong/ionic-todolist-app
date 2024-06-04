import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import todos from '../../data/todos';
import { TodoPage } from '../todo/todo';
//todos.ts에 있는 todos 데이터를 import시킨다.


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

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.todos = todos;
    //import해온 세개의 데이터를 바로 위에 클래스 위에 있는, todos에 넣는다.
  }

  openNewTodo(todoId) {
    this.navCtrl.push(TodoPage, { id: todoId});
  }

}