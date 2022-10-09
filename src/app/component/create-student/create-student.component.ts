import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toDoAddtion } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/Student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
})
export class CreateStudentComponent implements OnInit {
  addform: FormGroup;
std!:toDoAddtion
  constructor(private stdService:StudentService, private router: Router) {
    this.addform = new FormGroup(
      {
        task: new FormControl(this.std?.task??"first task", [Validators.required]),
        check: new FormControl(this.std?.check??"true", [Validators.required]),
      })
    }

  ngOnInit() {
    
  }
  
add(){
  this.std = this.addform.value as toDoAddtion
  this.stdService.add(this.std).subscribe(
    {
      next:(value) =>{
        console.log(value)
        this.router.navigateByUrl("/toDo")
      },
      error:(error)=>{
        console.log(error)
      }
    }
  )
}
}
