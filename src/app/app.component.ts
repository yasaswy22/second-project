import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;
  title = 'second-project';

  constructor(){
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.designation = 'Software Engineer';
    this.user.address = '1234 Main St, City, State';
    this.user.phone = ['123-234-3456', '234-234-2345'];
    // this.user.phone = [];
  }
}
