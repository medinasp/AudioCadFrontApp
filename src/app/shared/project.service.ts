import { Injectable } from '@angular/core';
import {Project} from './project.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44341/api/Projects'
  formData:Project = new Project();
  list : Project[];

  postProject(){
    return this.http.post(this.baseURL, this.formData);
  }

  putProject(){
    return this.http.put(`${this.baseURL}/${this.formData.projetoId}`, this.formData);
  }

  deleteProject(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Project[])
  }
}
