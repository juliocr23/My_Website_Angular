import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // title = "Alien Invasion";
  // imgFile = "../../assets/images/AlienInvasion.gif";
  // description = " A desktop platform video game in 2D, entirely in Java from scratch. Integrated popular techniques such as Double Buffering and page Flipping to render on the screen." +
  //               " Used concepts like animation, collision, parallel scrolling, AI, and gravity for an overall good user experience.";
  @Input() projectModel:ProjectModel = new ProjectModel();

  constructor() { }

  ngOnInit(): void {
  }

}
