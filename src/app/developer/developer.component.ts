import { Component, OnInit } from '@angular/core';
import { DevInfo } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  
  /* Properties */
  developer: DevInfo = new DevInfo();

  /**
   * dede
   */
  constructor() {}

  /**
   * dede
   */
  ngOnInit(): void {
    this.developer = {
      lastName: "labidouille", 
      firstName: "jojo", 
      sexe: "x", 
      age: 42, 
      bio: "bonjour", 
      skills: ["druide", "ninja", "cordon bleu"] 
    };
  }

}