import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isActive=false;
  displayChange(){
    if (this.isActive==false) {
      this.isActive=true
    } else {
      this.isActive=false
    }
  }

}
