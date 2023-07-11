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
  tablePanels:string[]=['assets/panel-1.jpg','assets/panel-2.jpg','assets/panel-3.jpg','assets/panel-4.jpg']
}