import { Component } from '@angular/core';
import { STUDENT, Student } from 'src/app/mocks/students.mock';
import { StudentsService } from 'src/app/services/students/students.service';
import { AbsentsComponent } from '../absents/absents.component';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {

  studentsTwo: Student[] = [];
  randomStudent! : Student;
  congratsSentence!: string;
  
  constructor(
    private studentService: StudentsService
    // private absentComponent = AbsentsComponent
    ){}
    presentStudents:Student[] = this.studentService.presentStudents;
  
  getRandomStudent(){
    console.log(this.presentStudents);
    if(this.presentStudents.length > 0){
      const randIndex = Math.floor(Math.random() * this.presentStudents.length);
      this.randomStudent = this.presentStudents[randIndex];
      // console.log(this.randomStudent);
      if(this.randomStudent.genre === "female"){
        this.congratsSentence = "Tu es la grande gagnante"
      } else {
        this.congratsSentence = "Tu es le grand gagnant"      
      }
      this.presentStudents.splice(randIndex,1);
      this.studentsTwo.push(this.randomStudent);
      // console.log("student",this.students);
      // console.log("student2",this.studentsTwo);
    } else {
      this.presentStudents = this.studentsTwo;
      this.studentsTwo = [];
      this.getRandomStudent();
    }
  }
}
