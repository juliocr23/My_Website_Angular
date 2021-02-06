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

    new EducationModel({collegeName:"City University of new York-Hebert H. Lehman College",
                        degreeType:"Bachelor of Science - BS, Mathematics and Computer Science",
                        date:"2017-2019",
                        file:"../../assets/images/lehman.jpeg",
                        collegeLink:"https://www.lehman.cuny.edu/"}),

    new EducationModel({collegeName:"Borough of Manhattan Community College",
                        degreeType:"Associate of Science - AS Computer Science",
                        date:"2015-2017",
                        file:"../../assets/images/bmcc.jpeg",
                        collegeLink:"https://www.bmcc.cuny.edu/"})
  ]


  experienceArray: ExperienceModel[]  = [



    new ExperienceModel({
      role:"Software Engineer",
      company:"Tata Consultancy Services",
      date:"Jul 2020 - Present",
      city:"New York City Metropolitan Area",
      file:"../../assets/images/tcs.jpeg",
      link:"https://www.tcs.com/"
    }),


    new ExperienceModel({
      role:"Lead iOS Developer Intern",
      company:"PantsuitProfessionals",
      date:"Jun 2020 - Dec",
      city:"New York City Metropolitan Area",
      file:"../../assets/images/pantsuit.png",
      link:"https://www.pantsuitprofessionals.com/"
    }),

    new ExperienceModel({
      role:"Supplemental Instructor Leader(SI)",
      company:"Research Foundation of The City University of New York",
      date:"Feb 2018 - May 2019",
      city:"Greater New York City Area",
      file:"../../assets/images/SI.png",
      link:"https://www.rfcuny.org/RFWebsite/"
    })
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
