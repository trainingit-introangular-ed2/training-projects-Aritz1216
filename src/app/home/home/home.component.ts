import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public numberProjects: number;
  public counterClass = 'tag secondary';

  constructor() { }

  ngOnInit() {
    this.numberProjects = environment.projects.length;
  }

}
