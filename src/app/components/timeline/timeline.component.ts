import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  cloudSection=[
    {'cloudImg':'assets/aws.png','cloudDesc':'Fortify Your Future with AWS Security: Unleash Trust in the Cloud'},
    {'cloudImg':'assets/azure.png','cloudDesc':'Elevate Confidence in the Cloud: Empowering Security with Azure'},
    {'cloudImg':'assets/gc.png','cloudDesc':'Guardian of Cloud Confidence: Securing Excellence with GCP'},
  ]
}
