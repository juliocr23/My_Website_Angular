import { Component, Input, OnInit } from '@angular/core';
import { ExperienceModel } from '../model/experience.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() public experience:ExperienceModel = new ExperienceModel();

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
