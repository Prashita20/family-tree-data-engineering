import { Person, Gender } from '../models/Person';

export class FamilyTree {
  private members: Map<string, Person>;

  constructor() {
    this.members = new Map();
  }

  addPerson(person: Person) {
    this.members.set(person.name, person);
  }

  getPerson(name: string): Person | undefined {
    return this.members.get(name);
  }

  addChild(motherName: string, childName: string, gender: Gender): string {
    const mother = this.getPerson(motherName);

    if (!mother || mother.gender !== 'Female') {
      return 'CHILD_ADDITION_FAILED';
    }

    const child = new Person(childName, gender);
    child.mother = mother;
    child.father = mother.spouse;

    mother.addChild(child);

    if (mother.spouse) {
      mother.spouse.addChild(child);
    }

    this.addPerson(child);

    return 'CHILD_ADDED';
  }
}
