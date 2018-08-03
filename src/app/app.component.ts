import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   productForm: FormGroup;
//   constructor(
//     private _fb: FormBuilder
//   ) {
//     this.createForm();
//   }

//   createForm() {
//     this.productForm = this._fb.group({
//       itemRows: this._fb.array([])

//     });
//     this.productForm.setControl('itemRows', this._fb.array([]));
//   }
//   get itemRows(): FormArray {
//     return this.productForm.get('itemRows') as FormArray;
//   }
//   addNewRow() {

//     const control = <FormArray>this.productForm.controls['itemRows'];
//     control.push(this.initItemRows());
// }
//unit={};
  ngOnInit() {
    // this.productForm = this._fb.group({
    //   itemRows: this._fb.array([this.initItemRows()])


    // });
  }
//   initItemRows() {
//     return this._fb.group({
//         name: [' '],
//         Product: [' '],
//         unitValue: [''],
//         unittype: [''],
//         unitValuesec: [' '],
//         unittypesec: [' ']
//     });
// }

  // submit  (form) {

  //   console.log(form.value.itemRows);
  // }

}
