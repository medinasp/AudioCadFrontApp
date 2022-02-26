import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Project } from 'src/app/shared/project.model';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styles: [
  ]
})
export class ProjectFormComponent implements OnInit {

  constructor(public service:ProjectService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

onSubmit(form: NgForm){
  if (this.service.formData.projetoId == 0)
  this.insertRecord(form);
  else
  this.uodateRecord(form);
}

insertRecord(form: NgForm){
  this.service.postProject().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success('Submitted successfully', 'Project Registered')

    },
    err => {console.log(err);}
  );
}

uodateRecord(form: NgForm){
  this.service.putProject().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.info('Updated successfully', 'Project Registered')

    },
    err => {console.log(err);}
  );
}

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Project();
  }
}
