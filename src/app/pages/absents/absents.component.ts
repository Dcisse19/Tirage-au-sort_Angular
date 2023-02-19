import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { STUDENT, Student } from 'src/app/mocks/students.mock';

@Component({
  selector: 'app-absents',
  templateUrl: './absents.component.html',
  styleUrls: ['./absents.component.css']
})
export class AbsentsComponent {
  students: Student[] = STUDENT;
  presentStudents!: Student[];
  absents: Student[] = [];
  absentes: Student[] = [];
  absentStudent!: Student;
  absentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getPresentStudents();
    this.getAbsentStudents();
    this.initAbsentForm();
  }

  initAbsentForm() {
    this.absentForm = this.formBuilder.group({
      absent_name: [null]
    })
  }
  getPresentStudents() {
    const presence = this.students.filter((std: Student) => std.here === true);
    if (presence) {
      this.presentStudents = presence;
    }
    // console.log(this.presentStudents);
  }

  getAbsentStudents() {
    const absence = this.students.filter((std: Student) => std.here === false);
    console.log(absence);
    if (absence) {
      this.insertAbsentStudent(absence);
    }
  }

  insertAbsentStudent(absents : Student[]){
     absents.forEach(absent => {
      if(absent.genre === "female"){
        this.absentes.push(absent);
      } else if(absent.genre === "male"){
        this.absents.push(absent);
      }
      
    });
  }



  markAbsent() {
    const id = this.absentForm.value.absent_name;
    console.log("id absent : ",id);
    const absentStudent = this.students.find((student:Student) => student.id === id);
    if(absentStudent){
      console.log(absentStudent);
      //absentStudent = this.absentStudent;
      // absentStudent.here = false;
      // if (absentStudent.genre === "female") {
      //   this.absentes.push(absentStudent);
      // } else if (absentStudent.genre === "male") {
      //   this.absents.push(absentStudent);
      // }
    }
    this.reloadCurrentRoute();
  }

  markPresent(id:number) {
    const student = this.students.find((student:Student) => student.id === id);
    if(student){
      student.here = true;
    }
    this.getPresentStudents();
    this.getAbsentStudents();
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}