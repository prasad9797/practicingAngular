import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { from, map,filter } from 'rxjs';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CommonModule, NewTaskComponent, ShowTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: number[] = [];

  myObs = from([2,3,4,5,6])

  transformData = this.myObs.pipe(map((ele) => { return ele*2 }), filter((v: number)=>{return v===6}))

  getData(){
    this.transformData.subscribe((val)=>{
      this.data.push(val)
    })
  }
}
