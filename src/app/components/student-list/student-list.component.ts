import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList = new Array<Student>()

  @Input() dni: string
  @Input() lastName: string
  @Input() firstName: string
  @Input() email: string

  @Input() dni2: string
  @Input() Apellido2: string
  @Input() Nombre2: string
  @Input() email2: string
  @Input() id2: number
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.studentService.getAll().subscribe(response =>{
      this.studentList = response
    }, error =>{
      console.error(error)
      alert('Error'+ error.error)
    })
  }

  save(){
    let newStudent = new Student
    newStudent.dni = this.dni
    newStudent.firstName = this.firstName
    newStudent.lastName = this.lastName
    newStudent.email = this.email
    newStudent.cohort = 0
    newStudent.status = 'activo'
    newStudent.gender = 'masculino'
    newStudent.address = 'abc123'
    newStudent.phone = '000'
    this.studentService.save(newStudent).subscribe(()=>{
      location.reload();
    },error =>{
      console.log(error.error.message)
    })
  }

  delete(id:number){
    this.studentService.delete(id).subscribe(()=>{
    location.reload()
  },error=>{
    console.log(error.error.message)
  })
  }  
  
 /* view(ver:any, s:Student){
    this.id2 = s.id
    this.dni2 = s.dni
    this.Nombre2 = s.firstName
    this.Apellido2 = s.lastName
    this.email2 = s.email
    this.modalService.open(ver).result.then(()=>{
      let newStudent = new Student
      newStudent.id=this.id2
      newStudent.dni = this.dni2
      newStudent.firstName = this.Nombre2
      newStudent.lastName = this.Apellido2
      newStudent.email = this.email2
      newStudent.cohort = 0
      newStudent.status = 'activo'
      newStudent.gender = 'masculino'
      newStudent.address = 'abc123'
      newStudent.phone = '000'
      this.studentService.edit(newStudent).subscribe(()=>{
        location.reload();
      },error =>{
        console.log(error.error.message)
      })    
    })
  }*/

}
