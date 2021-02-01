import { Component, OnInit } from '@angular/core';
import { EducationModel } from '../model/education.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  intro:string = "Growing up, video games played a big part of my childhood," +
                  "so much that I wanted to make my own video games. " +
                  "So, I decided to pursued a career in computer science and mathematics. " +
                  "Over time, I was able to create my own video games, mobile apps, and web applications. " +
                  "My goal is to always build products that provides a perfect perfomance experience and satisfy users.";
  title:string = "About me.";

  educationArray:EducationModel[]= [
    new EducationModel("City University of new York-Hebert H. Lehman College",
                      "Bachelor of Science - BS, Mathematics and Computer Science",
                      "2017-2019",
                      "../../assets/images/lehman.jpeg",
                      "https://www.lehman.cuny.edu/"),

    new EducationModel("Borough of Manhattan Community College",
                        "Associate of Science - AS Computer Science",
                        "2015-2017",
                        "../../assets/images/bmcc.jpeg",
                        "https://www.bmcc.cuny.edu/")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
