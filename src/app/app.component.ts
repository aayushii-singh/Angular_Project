import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  bridgeLabzLogo = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20Brand%20Logo.svg'; // Logo URL
  bridgeLabzURL = 'https://www.bridgelabz.com'; // Website URL

  openBridgeLabzSite() {
    window.open(this.bridgeLabzURL, '_blank'); // Opens in a new tab
  }
}