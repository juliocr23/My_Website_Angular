import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() projectModel:ProjectModel = new ProjectModel();

  constructor() { }

  ngOnInit(): void {
  }

  onOpen(url:string){
    window.open(url,"_blank");
  }

}
