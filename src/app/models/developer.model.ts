import { Skill } from './skill.model'

export class DevInfo {
    public lastName!: string;
    public firstName!: string;
    public sexe!: string;
    public age!: number;
    public bio!: string;
    public skills!: Skill[];
    // call of Skill from Skill class

    constructor(
        lastName: string,
        firstName: string,
        sexe: string,
        age: number,
        bio: string,
        skills: Skill[]
    ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.sexe = sexe;
        this.age = age;
        this.bio = bio;
        this.skills = skills;
    }
}