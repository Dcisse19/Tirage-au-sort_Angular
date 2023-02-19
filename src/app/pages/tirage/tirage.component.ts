import { Component } from '@angular/core';
import { STUDENT, Student } from 'src/app/mocks/students.mock';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {

  students: Student [] = STUDENT;
  studentsTwo: Student[] = [];
  randomStudent! : Student;
  congratsSentence!: string;
    
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
