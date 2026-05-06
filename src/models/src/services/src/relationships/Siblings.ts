import { Person } from '../models/Person';

export function getSiblings(person: Person): Person[] {
  // If no mother, no siblings
  if (!person.mother) return [];

  // Return all children of mother except the person itself
  return person.mother.children.filter(
    (child) => child.name !== person.name
  );
}
