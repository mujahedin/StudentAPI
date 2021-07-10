import { Injectable } from '@angular/core';
import { StudentDetail } from './student-detail.model';
import { HttpClient } from "@angular/common/http";
import { StudentIndex } from './student-indexes.model';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  postClientDetail() {
      throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  formData:StudentDetail = new StudentDetail();
  readonly baseURL = 'http://localhost:28197/api/StudentDetail'
  list : StudentDetail[];
  formsData:StudentIndex = new StudentIndex();
  readonly baseAURL = 'http://localhost:28197/api/StudentIndex'
  lis : StudentIndex[];

  postStudentDetail() {
    return this.http.post(this.baseURL, this.formData)
  }

  putStudentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.studentId}`, this.formData)
  }

  deleteStudentDetail(id:number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  deleteStudentIndex(id:number) {
    return this.http.delete(`${this.baseAURL}/${id}`);
  }

  refreshLi() {
    this.http.get(this.baseAURL)
    .toPromise()
    .then(res => this.lis = res as StudentIndex[]);
  }

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as StudentDetail[]);
  }

}
