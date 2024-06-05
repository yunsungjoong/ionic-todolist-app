import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})

export class AddTodoPage {
  newTodo = {
    title: '',
    description: '',
    complete: false
  };

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  addTodo() {
    this.viewCtrl.dismiss(this.newTodo);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
