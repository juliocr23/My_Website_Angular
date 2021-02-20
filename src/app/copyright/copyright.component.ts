import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright = "Copyright © Julio C. Rosario 2021";

  constructor() { }

  ngOnInit(): void {
  }

}
