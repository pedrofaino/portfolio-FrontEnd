import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
  

export class BodyComponent implements OnInit {

  experiencias=['asd','asd'];
  tecnologias=['asd','asd'];
  educacion=['asd','asd'];
  proyectos=['asd','asd'];

  constructor() { }

  ngOnInit(): void {
  }

}
