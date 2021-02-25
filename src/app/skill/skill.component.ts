import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skill: Skill = new Skill();
  @Input() skills!: string;

  constructor() {}

  ngOnInit(): void {
    this.skill = {
      site: "Website.com",
      logo: "logo",
      name: "name"
    };
  }
}
