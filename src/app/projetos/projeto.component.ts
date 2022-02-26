import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Projeto } from '../shared/projeto.model';
import { ProjetoService } from '../shared/projeto.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styles: [
  ]
})
export class ProjetoComponent implements OnInit {

  constructor(public service: ProjetoService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Projeto){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you shure to delete this record?'))
    {
    this.service.deleteProjeto(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted succesfully",'Project Deleted')
      },
      err =>{console.log(err)}
    )
    }    
  }
}
