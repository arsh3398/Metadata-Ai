import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  icon=faX;
  isActive=false;
  styles={'width':'fit-content', 'display':'block'}
  styleBackground={'filter':'blur(10px)'}
  displayChange(){
    if (this.isActive==false) {
      this.isActive=true
    } else {
      this.isActive=false
    }
  }
  constructor(private builder: FormBuilder){}
  public captchaResolved : boolean = false;
  CareerForm=this.builder.group({
    firstName:this.builder.control('', Validators.required),
    lastName:this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    recaptchaReactive: this.builder.control(''),
  })
  onSubmit(){
    if (this.CareerForm.valid) {
      console.log('Form submitted!');
      console.log(this.CareerForm.value);
    }
    else{
      console.log('Invalid')
    }
  }
  checkCaptcha(captchaResponse : string) {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}
closeForm(){
  this.isActive=false;
}
}
