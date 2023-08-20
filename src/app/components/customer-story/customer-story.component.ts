import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-customer-story',
  templateUrl: './customer-story.component.html',
  styleUrls: ['./customer-story.component.scss']
})

export class CustomerStoryComponent {
  activeTab:number = 0;
  makeActive(index:number){
    this.activeTab=index;
  }
  stylesTab={
    'filter':'grayscale(0%)',
    'border-bottom': '3px solid black',
  }
  stylesPanel={
    'display':'flex',
    'align-items': 'center'
  }
  tablePanels:string[]=['assets/blur-1.png','assets/blur-2.png','assets/blur-3.png','assets/blur-4.png']
}