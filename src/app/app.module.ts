import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ContactFormComponent,
    SignUpFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
