import { Component } from '@angular/core';
import { STUDENT, Student } from 'src/app/mocks/students.mock';
import { AbsentsComponent } from '../absents/absents.component';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {

  students: Student [] = STUDENT;
  presentStudents: Student[] = [];
  studentsTwo: Student[] = [];
  randomStudent! : Student;
  congratsSentence!: string;
    
  constructor(
    // private absentComponent = AbsentsComponent
  ){ }
  getRandomStudent(){
    if(this.students.length > 0){
      const randIndex = Math.floor(Math.random() * this.students.length);
      this.randomStudent = this.students[randIndex];
      // console.log(this.randomStudent);
      if(this.randomStudent.genre === "female"){
        this.congratsSentence = "Tu es la grande gagnante"
      } else {
        this.congratsSentence = "Tu es le grand gagnant"      
      }
      this.students.splice(randIndex,1);
      this.studentsTwo.push(this.randomStudent);
      // console.log("student",this.students);
      // console.log("student2",this.studentsTwo);
    } else {
      this.students = this.studentsTwo;
      this.studentsTwo = [];
      this.getRandomStudent();
    }
  }
}
