import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Keep it as standalone
  imports: [FormsModule], // ✅ Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Hello from BridgeLabz"; 
  bridgeLabzLogo: string = "https://www.bridgelabz.com/assets/images/BridgeLabz-Logo.svg"; 
  userName: string = ""; // ✅ User input variable

  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}