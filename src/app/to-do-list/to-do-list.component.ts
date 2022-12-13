import { Component } from '@angular/core';

import { ToDoTask } from 'src/app/models/to-do.models';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  toDo: ToDoTask[] = [];

  inputValue = '';

  addTask(): void {
    if (this.inputValue) {
      const newTask = { text: this.inputValue, done: false };

      this.inputValue = '';
      this.toDo.push(newTask);
    }
  }

  deleteTask(index: number): void {
    this.toDo.splice(index, 1);
  }

  clearTasks(): void {
    this.toDo = [];
  }

  get doneTasks(): string {
    const doneTasks = this.toDo.filter((c) => c.done);

    return 'Completed ' + doneTasks.length + ' of ' + this.toDo.length;
  }
}
