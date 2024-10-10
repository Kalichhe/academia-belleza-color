import { Component, input } from '@angular/core';
import { Task } from '../../data-access/task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports:[CommonModule],

})
export class TableComponent {
  tasks = input.required<Task[]>();
}
