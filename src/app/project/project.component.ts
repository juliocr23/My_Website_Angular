import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../model/project.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers,
  encapsulation: ViewEncapsulation.None,

})
export class ProjectComponent implements OnInit {

  @Input() projectModel:ProjectModel = new ProjectModel();
  currentSlide = 0;

  constructor() { 
  
  }

  ngOnInit(): void {

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.projectModel.imgFileArray.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.projectModel.imgFileArray.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }



  onOpen(url:string){
    window.open(url,"_blank");
  }

}
