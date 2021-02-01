import { Component, OnInit } from '@angular/core';
import { EducationModel } from '../model/education.model';
import { ExperienceModel } from '../model/experience.model';

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


  experienceArray: ExperienceModel[]  = [
    new ExperienceModel("Software Engineer",
                        "Tata Consultancy Services",
                        "Jul 2020 - Present",
                        "New York City Metropolitan Area",
                        "../../assets/images/tcs.jpeg",
                        "https://www.tcs.com/"),
    new ExperienceModel("Lead iOS Developer Intern",
                        "PantsuitProfessionals",
                        "Jun 2020 - Dec",
                        "New York City Metropolitan Area",
                        "../../assets/images/pantsuit.png",
                        "https://www.pantsuitprofessionals.com/"),

    new ExperienceModel("Supplemental Instructor Leader(SI)",
                        "Research Foundation of The City University of New York",
                        "Feb 2018 - May 2019",
                        "Greater New York City Area",
                        "../../assets/images/SI.png",
                        "https://www.rfcuny.org/RFWebsite/")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
