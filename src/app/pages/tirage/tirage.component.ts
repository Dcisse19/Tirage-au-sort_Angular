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
    ;

   ngOnInit(){
    this.studentService.getPresentStudents();
   } 
  
  getRandomStudent(){
    if(this.studentService.presentStudents.length > 0){
      const randIndex = Math.floor(Math.random() * this.studentService.presentStudents.length);
      this.randomStudent = this.studentService.presentStudents[randIndex];
      // console.log(this.randomStudent);
      if(this.randomStudent.genre === "female"){
        this.congratsSentence = "Tu es la grande gagnante"
      } else {
        this.congratsSentence = "Tu es le grand gagnant"      
      }
      this.studentService.presentStudents.splice(randIndex,1);
      this.studentsTwo.push(this.randomStudent);
      // console.log("student",this.students);
      // console.log("student2",this.studentsTwo);
    } else {
      this.studentService.presentStudents = this.studentsTwo;
      this.studentsTwo = [];
      this.getRandomStudent();
    }
  }
}
