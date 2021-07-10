import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentDetail } from 'src/app/shared/student-detail.model';
import { StudentIndex } from 'src/app/shared/student-indexes.model';
import { StudentIndexService } from 'src/app/shared/student-indexes.service';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { NgForm } from '@angular/forms';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
@Component({
  selector: 'app-student-indexes',
  templateUrl: './student-indexes.component.html',
  styles: [
  ]
})
export class StudentIndexesComponent implements OnInit {
  studentId!:number;
  id!:number;
  zmpp:number;
  @Input() helper:number;
  constructor(public service:StudentIndexService,public services:StudentDetailService,
    private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.service.refreshList();
    this.service.refresh();
    this.studentId=this.service.formData.studentId;
    this.id=this.services.formsData.studentId;
  }
   getvaluefrombutton(){
  
    this.zmpp=this.helper;
  }
  populateForms(selectedRecord:StudentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
   
   
  }
  populateForm(selectedRecord:StudentIndex) {
    this.service.formsData = Object.assign({}, selectedRecord);
 
  }
  resetForm(forms:NgForm) {
    forms.form.reset();
    this.services.formData = new StudentDetail();
    this.service.formsData = new StudentIndex();
  }
  onDelete(id:number) {
    if(confirm("Czy na pewno chcesz usunąć ten rekord?"))
    {
      this.service.deleteStudentIndex(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error('Usuwanie rekordu z bazy.', 'Usunięto!');
        },
        err=>{console.log(err);
        }
      )
    }
  }

}
