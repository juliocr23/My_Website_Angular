import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from '../model/project.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers,
  encapsulation: ViewEncapsulation.None

})
export class ProjectComponent implements OnInit {

  @Input() projectModel:ProjectModel = new ProjectModel();

  tempImgFile:string="";
  size:number = 0;
  index:number = 0;

  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {

    if(this.projectModel.imgFileArray.length >= 1){
        this.tempImgFile = this.projectModel.imgFileArray[0];
        this.size = this.projectModel.imgFileArray.length;
    }
  }

  onNext(){

    this.index = (this.index+1) % this.size;
    console.log(this.size);
    this.tempImgFile = this.projectModel.imgFileArray[this.index];
  }

  onPrev(){
    // this.index = (this.index-1) % this.size;
    // console.log(this.size);
    // this.tempImgFile = this.projectModel.imgFileArray[this.index];
  }

  onOpen(url:string){
    window.open(url,"_blank");
  }

}
