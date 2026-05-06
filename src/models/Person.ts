export type Gender = 'Male' | 'Female';

export class Person {
  name: string;
  gender: Gender;
  mother?: Person;
  father?: Person;
  spouse?: Person;
  children: Person[];

  constructor(name: string, gender: Gender) {
    this.name = name;
    this.gender = gender;
    this.children = [];
  }

  addChild(child: Person) {
    this.children.push(child);
  }
}
