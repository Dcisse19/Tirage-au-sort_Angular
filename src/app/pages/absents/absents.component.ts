import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { STUDENT, Student } from 'src/app/mocks/students.mock';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-absents',
  templateUrl: './absents.component.html',
  styleUrls: ['./absents.component.css']
})
export class AbsentsComponent {
  absentStudent!: Student;
  absentForm!: FormGroup;

  constructor(
    public studentService: StudentsService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.studentService.getPresentStudents();
    this.studentService.getAbsentStudents();
    console.log("first : ",this.studentService.students);
    this.initAbsentForm();
  }


  initAbsentForm() {
    this.absentForm = this.formBuilder.group({
      absent_name: [null]
    })
  }


  markAbsent() {
    const id: number = +this.absentForm.value.absent_name;
    console.log("id absent : ", id);
    const absentStudent = this.studentService.students.find((student: Student) => student.id === id);
    if (absentStudent) {
      // console.log(absentStudent);
      this.absentStudent = absentStudent;
      this.absentStudent.here = false;
      if (this.absentStudent.genre === "female") {
        this.studentService.absentes.push(this.absentStudent);
      } else if (absentStudent.genre === "male") {
        this.studentService.absents.push(this.absentStudent);
      }
      this.studentService.getPresentStudents()    
      // this.reloadCurrentRoute();
    }
  }

  markPresent(id: number) {
    console.log("before : ",this.studentService.students);
    const student = this.studentService.students.find((student: Student) => student.id === id);
    if (student) {
      const index = this.studentService.students.indexOf(student);
      console.log("index : ", index);
      this.studentService.students[index].here = true;
      this.removeFromAbsent(student);
      console.log("after : ",this.studentService.students);
      this.studentService.getPresentStudents()
    }
  }

  removeFromAbsent(std: Student) {
    if (std.genre === "female") {
      const index = this.studentService.absentes.indexOf(std);
      this.studentService.absentes.splice(index, 1);
    } else if (std.genre === "male") {
      const index = this.studentService.absents.indexOf(std);
      this.studentService.absents.splice(index, 1);
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}



