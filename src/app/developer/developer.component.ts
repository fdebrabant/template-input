import { Component, OnInit } from '@angular/core';
import { DevInfo } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  
  public developer!: DevInfo;
  public skills!: Skill[];
  public skillOne!: Skill;
  public skillTwo!: Skill;

  constructor() {}


  ngOnInit(): void {

    // Init skills from Skill class
    this.skillOne = new Skill (
      "JavaScript",
      "LogoJS",
      "www.js.com"
    );

    this.skillTwo = new Skill (
      "TypeScript",
      "LogoTS",
      "www.ts.com"
    );

    // Init array of skills
    this.skills = [this.skillOne, this.skillTwo]

    // Init developer (including skills) from DevInfo class
    this.developer = new DevInfo (
      "labidouille", 
      "jojo", 
      "XXY", 
      42, 
      "bonjour", 
      this.skills 
    );
  }

}