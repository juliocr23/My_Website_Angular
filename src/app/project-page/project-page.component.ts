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
      description: "  A scroller  video game, created using Java.  Base on a kid trying to save the world from an alien invasion.",
      link:"https://github.com/juliocr23/AlienInvasio"
    }),

    new ProjectModel({
      title:"Zero Fighter",
      imgFileArray:["../../assets/images/jmpShowCase.gif"],
      description: "  A desktop video game in 2D, created using Java from scratch. The type of game you would play on a retro console.",
      link:"https://github.com/juliocr23/JMP"
    }),

    new ProjectModel({
      title:"Password Wallet",
      imgFileArray:["../../assets/images/passwordpocket/PasswordPocketLogin.png",
              "../../assets/images/passwordpocket/PasswordPocketMain.png",
              "../../assets/images/passwordpocket/PasswordPocketCategories.png",
              "../../assets/images/passwordpocket/PasswordPocketPopup.png",
              "../../assets/images/passwordpocket/PasswordPocketSetting.png",
               ],
      description:"An iOS app that allows users to save their passwords. " +
                  "This application uses Google's firebase and end to end encryption to secure user's data. " +
                  "on top of face regconition for log in. ",

      link:"https://juliocr23.github.io/PasswordPocket/"
    }),
    new ProjectModel({
      title:"Crypto Tracker",
      imgFileArray:[ "../../assets/images/cryptotracker/cryptotrackerList.png",
      "../../assets/images/cryptotracker/cryptotrackerGraph.png",
      "../../assets/images/cryptotracker/cryptotrackerNews.png",
      "../../assets/images/cryptotracker/cryptotrackerf+Favorites.png"

    ],
      description:"An iOS app that allow users to track their favorite cryptocurrencies in real time. It uses APIs like "
      + "SwiftJSON, Alamofire, and Charts API. ",
      link:"http://juliocr23.github.io/CryptocurrenciesWeb/"
    })
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
