import { Injectable } from '@angular/core';
import { STUDENT, Student } from 'src/app/mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = STUDENT;
  presentStudents :Student[] = [];
   

  constructor() { }
  getPresentStudents() : Student[] {
    const presence = this.students.filter((std: Student) => std.here === true);
    if (presence) {
      this.presentStudents = presence;
    }
    return presence;
  }

  
}
