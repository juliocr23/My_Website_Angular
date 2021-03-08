import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('800ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('800ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() images:string[]  = [];

  current:number = 0;
  imageShowing:string="";
  size:number  = 0;

  loop = setInterval(()=>{                         
    this.goFoward();
  }, 2500);

  constructor() { }

  ngOnInit(): void {
    if(this.images.length > 0){
      this.imageShowing = this.images[this.current];
    }
    this.size = this.images.length;
  }

  onPrev(){
    this.goBack();
    clearInterval(this.loop);
  }

  onNext(){
     this.goFoward();
    clearInterval(this.loop);
  }

  goBack(){
    this.current = (this.current - 1) < 0 ? this.size-1: this.current-1;
    this.imageShowing = this.images[this.current];
  }

  goFoward(){
    this.current = (this.current + 1) % this.images.length;
    this.imageShowing = this.images[this.current];
  }
}
