import { Injectable } from '@angular/core';
import { STUDENT, Student } from 'src/app/mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students1: Student[] = STUDENT;
  students: Student[] = [];
  presentStudents: Student[] = [];
  absentStudents: Student[] = [];
  absents: Student[] = [];
  absentes: Student[] = [];

  constructor() {}

  // ngOnInit(){
  //   this.transferStudents();
  // }

  transferStudents(): Student[] {{
    this.students1.forEach(student =>{
      this.students.push(student);
    })
    return this.students;
  }
}
  getPresentStudents() : Student[] {
    const presence = this.students.filter((std: Student) => std.here === true);
    if (presence) {
      this.presentStudents = presence;
    }
    return this.presentStudents;
  }

  // getAbsents(){
  //   const absence = this.students.filter((std: Student) => std.here === false);
  //   if (absence) {
  //     this.absentStudents = absence;
  //   }
  // }

  getAbsentStudents() {
    const absences = this.students.filter((std: Student) => std.here === false);
    if (absences) {
      this.insertAbsentStudent(absences);
    }
  }
  insertAbsentStudent(absentList:Student[]) {
    absentList.forEach(absent => {
      if (absent.genre === "female") {
        this.absentes.push(absent);
      } else if (absent.genre === "male") {
        this.absents.push(absent);
      }
    });
  }

}
