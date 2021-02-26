import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../model/project.model';
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projectModelArray:ProjectModel[] = [
    new ProjectModel({
      title:"Alien Invasion",
      imgFileArray:["../../assets/images/AlienInvasion.gif"],
      description: "  A desktop platform video game in 2D, entirely in Java from scratch. Integrated popular techniques such as Double Buffering and page Flipping to render on the screen."+
      "Used concepts like animation, collision, parallel scrolling, AI, and gravity for an overall good user experience.",
      link:"https://github.com/juliocr23/AlienInvasio"
    }),

    new ProjectModel({
      title:"Password Wallet",
      imgFileArray:["../../assets/images/passwordpocket/PasswordPocketLogin.png", 
              "../../assets/images/passwordpocket/PasswordPocketMain.png",
              "../../assets/images/passwordpocket/PasswordPocketCategories.png",
              "../../assets/images/passwordpocket/PasswordPocketPopup.png",
              "../../assets/images/passwordpocket/PasswordPocketSetting.png",
               ],
      description:"This application uses Google's firebase\firestore API to store user's accounts." + 
      " It also use Firebase\Auth API to verify users identity using their emails, on top of using end to end encryption to upload data. And not to mention face regconition to log in. ",

      link:"https://github.com/juliocr23/Password-Pocket"
    }),
    new ProjectModel({
      title:"Crypto Tracker",
      imgFileArray:["../../assets/images/crypto tracker.png"],
      description:"This application uses SwiftJSON, Alamofire, and CryptoCompare API to provide "+ 
      "real time  data on cryptocurrencies. Additionally, it uses the Charts API to illustrate data to users " + 
      "hourly, daily, weekly, monthly, yearly, and all time.",
      link:"https://github.com/juliocr23/Cryptocurrencies"
    })
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
