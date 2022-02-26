import { Injectable } from '@angular/core';
import { Projeto } from './projeto.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44341/api/Projetos'
  formData:Projeto = new Projeto();
  list : Projeto[];

  postProjeto(){
    return this.http.post(this.baseURL, this.formData);
  }

  putProjeto(){
    return this.http.put(`${this.baseURL}/${this.formData.projetoId}`,this.formData);
  }

  deleteProjeto(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Projeto[])
  }

}
