import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = ""
  enLogin = true;

  constructor(
    private fbService: FirebaseService
  ) {
  }

  login() {
    let data = (<HTMLInputElement>document.getElementById("input-name")).value
    this.fbService.newUser(data);
    this.enLogin = true;
  }
}
