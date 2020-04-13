import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  restrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.restrationForm = this.formBuilder.group({
      firstName: [' ', Validators.required],
      lastName: [' ', Validators.required],
      email: [' ', Validators.required],
      region: [' ', Validators.required],
      country: [' ', Validators.required],
      gender: [' ', Validators.required],
      language: this.formBuilder.group({
        lHindi: [''],
        lEnglish: [''],
        lMarathi: ['']
      }),
      comment: [' ', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.restrationForm.controls; }

  onSubmit() {
    //  this.submitted = true;

      // stop here if form is invalid
      if (this.restrationForm.invalid) {
          return;
      }
      console.log('Form: '+this.restrationForm.value.firstName);
      console.log('First Name: '+this.restrationForm.controls.firstName.value);
      console.log('Hindi: '+this.restrationForm.get('language.lHindi').value);
      console.log('English: '+this.restrationForm.get('language.lEnglish').value);
      console.log('Marathi: '+this.restrationForm.get('language.lMarathi').value);
      console.log('First Name: '+this.restrationForm.controls.comment.value);
      console.log('First Name: '+this.restrationForm.controls.gender.value);
      alert('SUCCESS!! :-)')
  }
}
