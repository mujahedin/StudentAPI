import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentDetailService } from 'src/app/shared/student-detail.service';
import { StudentIndex } from 'src/app/shared/student-indexes.model';
import { StudentIndexService } from 'src/app/shared/student-indexes.service';

@Component({
  selector: 'app-student-indexes-form',
  templateUrl: './student-indexes-form.component.html',
  styles: [
  ] 
})
export class StudentIndexesFormComponent implements OnInit {

  constructor(public services:StudentIndexService,
     public service:StudentDetailService,
    private toastr:ToastrService){ 

      
    }
   


  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form:NgForm) {
    if(this.services.formsData.indexId==0)
    this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form:NgForm) {
    this.services.postStudentIndex().subscribe(
      res => {
        this.resetForm(form)
        this.services.refreshList();
        this.toastr.success('Dodawanie oceny.','Dodano!')
      },
      err => {console.log(err);}
    )
  }

  updateRecord(form:NgForm) {
    this.services.putStudentIndex().subscribe(
      res => {
        this.resetForm(form)
        this.services.refreshList();
        this.toastr.info('Aktualizacja rekordu w bazie.', 'Zaktualizowano!')
      },
      err => {console.log(err);}
    )
  }

  resetForm(form:NgForm) {
    form.form.reset();
    this.services.formsData = new StudentIndex();
  }

}