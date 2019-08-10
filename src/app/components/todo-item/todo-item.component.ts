import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      todo : true,
      'is-complete' : this.todo.completed
    }
    return classes;
  }

  onDelete(todo){
    
    // deleting the todo..sending the event upwards and catching the event the parent component
    this.deleteTodo.emit(todo);
    
  }

  onToggle(todo){
    // change in UI
    this.todo.completed = !todo.completed
    
    // change in service
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

}
