import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsernameValidators } from './user.validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent  {
form = new FormGroup({
  'userName': new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    UsernameValidators.cannotContainSpace,
    // UsernameValidators.shouldBeUnique
  ]),
  'password': new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]),
  topics: new FormArray([])
});
addtopics(topics: HTMLInputElement) {
(this.topics).push(new FormControl(topics.value));
}
get topics() {
  return this.form.get('topics') as FormArray;
}
get username () {
 return this.form.get('userName') ;
}
get password () {
  return this.form.get('password') ;
 }
 login(f) {
   console.log(f);
this.form.setErrors({
  invalidLogin: true

});
 }

}
