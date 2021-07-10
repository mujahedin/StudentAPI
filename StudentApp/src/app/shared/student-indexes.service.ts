import { Injectable } from '@angular/core';
import { StudentIndex } from './student-indexes.model';
import { StudentDetail } from './student-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentIndexService {

  constructor(private http:HttpClient) { }

  formsData:StudentIndex = new StudentIndex();
 
  readonly baseURL = 'http://localhost:28197/api/StudentIndex'
  formData:StudentDetail = new StudentDetail();
  readonly baseAURL = 'http://localhost:28197/api/StudentDetail'
  lis : StudentDetail[];
  list : StudentIndex[];
  
  postStudentIndex() {
    return this.http.post(this.baseURL, this.formsData)
  }

  putStudentIndex() {
    return this.http.put(`${this.baseURL}/${this.formsData.indexId}`, this.formsData)
  }

  deleteStudentIndex(id:number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as StudentIndex[]);
  }
  refresh() {
    this.http.get(this.baseAURL)
    .toPromise()
    .then(res => this.lis = res as StudentDetail[]);
  }
}