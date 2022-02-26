import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Projeto } from 'src/app/shared/projeto.model';
import { ProjetoService } from 'src/app/shared/projeto.service';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styles: [
  ]
})
export class ProjetoFormComponent implements OnInit {

  constructor(public service: ProjetoService, 
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
    this.service.postProjeto().subscribe(
      res =>{
        this.resetform(form);
        this.service.refreshList();
        this.toastr.success('Submitted succesfully','Project Included')
      },
      err => {console.log(err);}
    )
  }

  uodateRecord(form: NgForm){
    this.service.putProjeto().subscribe(
      res =>{
        this.resetform(form);
        this.service.refreshList();
        this.toastr.info('Update successfully', 'Project Updated')
  
      },
      err => {console.log(err);}
    );
  }

  resetform(form:NgForm){
    form.form.reset();
    this.service.formData = new Projeto();
  }
}
