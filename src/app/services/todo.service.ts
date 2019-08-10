import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {
        id:1,
        title:'ABC',
        completed:false
      },
      {
        id:2,
        title:'DEF',
        completed:true
      },
      {
        id:3,
        title:'GHI',
        completed:false
      }
    ]
  }

}
