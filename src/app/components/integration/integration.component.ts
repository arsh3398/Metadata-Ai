import { Component } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent {
  dataAnalyticsTools=[
    {'tagLine':'Converse with BI tools', 'logos':['assets/tableau.png','assets/tableau.png','assets/tableau.png'] },
    {'tagLine':'Converse with Enterprise', 'logos':['assets/tableau.png','assets/tableau.png','assets/tableau.png'] },
    {'tagLine':'Deal with data warehouse', 'logos':['assets/tableau.png','assets/tableau.png','assets/tableau.png'] },
    {'tagLine':'Cloud package', 'logos':['assets/tableau.png','assets/tableau.png','assets/tableau.png'] },
  ]
}
