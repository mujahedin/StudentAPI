import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { StudentIndexesComponent } from './student/student-indexes/student-indexes.component'; 
import { StudentIndexesFormComponent } from './student/student-indexes/student-indexes-form/student-indexes-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentIndexesComponent,
    StudentIndexesFormComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }