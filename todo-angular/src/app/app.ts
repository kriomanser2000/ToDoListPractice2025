import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Task
{
  id: number;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App
{
  tasks: Task[] = [];
  input = '';
  addTask()
  {
    if(!this.input.trim()) return;
    this.tasks.push({id: Date.now(), text: this.input});
    this.input = '';
  }
  deleteTask(id: number)
  {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}