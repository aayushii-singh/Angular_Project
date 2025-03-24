import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule for *ngIf
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Hello from BridgeLabz"; 
  bridgeLabzLogo: string = "https://www.bridgelabz.com/assets/images/BridgeLabz-Logo.svg"; 
  userName: string = ""; 
  errorMessage: string = "";

  validateUserName() {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;
    if (this.userName.trim() === "") {
      this.errorMessage = ""; 
    } else if (!regex.test(this.userName)) {
      this.errorMessage = "❌ Invalid name! Start with a capital letter and use at least 3 characters.";
    } else {
      this.errorMessage = "";
    }
  }

  isUserNameValid(): boolean {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;
    return regex.test(this.userName);
  }

  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}