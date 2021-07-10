import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentDetail } from 'src/app/shared/student-detail.model';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { StudentIndex } from 'src/app/shared/student-indexes.model';
import { StudentIndexService } from 'src/app/shared/student-indexes.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {
  studentDetailId:number;
  idhelpme=0;
  
  constructor(public service:StudentDetailService,public services:StudentIndexService,
    private toastr:ToastrService) { 
     
      
    }




  ngOnInit(): void {
    this.service.refreshList();
    this.services.refreshList();
  }
getvaluefrombutton(){


};
  populateForm(selectedRecord:StudentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
     
  }
  populateForms(selectedRecord:StudentIndex) {
    this.services.formsData = Object.assign({}, selectedRecord);
     
  }
  onDelete(id:number) {
    if(confirm("Czy na pewno chcesz usunąć ten rekord?"))
    {
      this.service.deleteStudentDetail(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error('Usuwanie rekordu z bazy.', 'Usunięto!');
          this.services.refreshList();
        },
        err=>{console.log(err);
        }
      )
    }
  }
  onDelet(id:number) {
    if(confirm("Czy na pewno chcesz usunąć ten rekord?"))
    {
      this.service.deleteStudentIndex(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error('Usuwanie rekordu z bazy.', 'Usunięto!');
          this.services.refreshList();
        },
        err=>{console.log(err);
        }
      )
    }
  }
  onSubmit(form:NgForm) {
    if(this.service.formData.studentId==0)
    this.insertRecord(form);
    else this.updateRecord(form);
    this.services.refreshList();
  }


  insertRecord(form:NgForm) {
    this.service.postStudentDetail().subscribe(
      res => {
        this.resetForm(form)
        this.services.refreshList();
        this.service.refreshList();
        this.toastr.success('Dodawanie nowego studenta.','Dodano!')
      },
      err => {console.log(err);}
    )
  }

  updateRecord(form:NgForm) {
    this.service.putStudentDetail().subscribe(
      res => {
        this.resetForm(form)
        this.service.refreshList();
        this.toastr.info('Aktualizacja rekordu w bazie.', 'Zaktualizowano!')
      },
      err => {console.log(err);}
    )
  }

  resetForm(forms:NgForm) {
    forms.form.reset();
    this.service.formData = new StudentDetail();

  }

}
