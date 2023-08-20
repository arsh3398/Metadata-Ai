import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private builder: FormBuilder){}
  ContactsForm=this.builder.group({
    firstName:this.builder.control('', Validators.required),
    lastName:this.builder.control('', Validators.required),
    phoneNumber:this.builder.control('',Validators.compose([Validators.required,Validators.maxLength(10)])),
    wantAs:this.builder.control('',Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  })
  onSubmit(){
    if (this.ContactsForm.valid) {
      console.log('Form submitted!');
      console.log(this.ContactsForm.value);
    }
    else{
      console.log('Invalid')
    }
  }
  }
