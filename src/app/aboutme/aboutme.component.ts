import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  intro:string = "Growing up, video games played a big part of my childhood, " +
  "so much that I wanted to make my own video games. " +
  "So, I pursued programming. And as I got more involve, I realized that " +
  "programming is like magic, anything is possible!";

  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenHeight, this.screenWidth);
  }

}
