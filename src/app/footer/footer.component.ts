import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../model/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact:ContactModel;

  constructor() {
    this.contact = new ContactModel({
      email: "mailto:rosariojulio40@gmail.com",
      github:"https://github.com/juliocr23",
      linkedIn:"https://www.linkedin.com/in/juliocr23/"
    });
   }

  ngOnInit(): void {
  }
}
