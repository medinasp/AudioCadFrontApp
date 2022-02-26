import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor(public service: ProjectService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:Project){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you shure to delete this record?'))
    {
    this.service.deleteProject(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Delete succesfully",'Register deleted')
      },
      err =>{console.log(err)}
    )
    }    
  }
}
  