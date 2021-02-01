import { Component, OnInit, Input } from '@angular/core';
import { EducationModel } from '../model/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() public  education: EducationModel;
  

  constructor(){
  }

 
  ngOnInit(): void {
  }

}
