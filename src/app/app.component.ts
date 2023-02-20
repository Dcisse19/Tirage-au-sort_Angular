import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tirage';

constructor(private studentService : StudentsService){
}
  ngOnInit(){
    this.studentService.getPresentStudents();
    this.studentService.getAbsentStudents();
  }
}

