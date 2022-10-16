import { Component, Input, OnInit, Output } from '@angular/core';
import {  UntypedFormGroup,UntypedFormControl,Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
 
})

export class TodoListComponent implements OnInit {
  @Input() smth: any;
  list:any[]=[];
  isDisabled = true;
 
  addTask(item:string){
    this.list.push({id:this.list.length,name:item })
    console.warn(this.list);
  }
  removeTask(id:number){
    console.warn(id)
    this.list = this.list.filter(item=>item.id!==id);
  }
  form: UntypedFormGroup = new UntypedFormGroup({
    test: new FormControl('',Validators.required)
  });

  constructor() { }
  ngOnInit(): void {
    }

    onSubmit() {
      if(this.form.valid){
        this.isDisabled = false;
      } 
      else {
        this.isDisabled = true;}
    }
}
