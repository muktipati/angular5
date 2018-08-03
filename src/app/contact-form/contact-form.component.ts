import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
user = {};
coures = [1, 2, 3];
contactMethod = [ {id: 1, name: 'mukti' },
                  {id: 2, name: 'abc' } ,
                  {id: 3, name: 'xyz' }];
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }

}
