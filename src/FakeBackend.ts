import { Person } from './app/People/Person/Person.interface';

const people: Person[] = [
  {
    id: '1',
    age: 63,
    name: 'Bart van Zijtveld',
    email: 'bart.van.zijtveld@dayrep.com',
    role: 'Adult literacy teacher',
    linkedPeople: [],
  },
  {
    id: '2',
    age: 31,
    name: 'Sabrina Pekel',
    email: 'sabrina.pekel@jourrapide.com',
    role: 'Staff development specialist',
    linkedPeople: [],
  },
  {
    id: '3',
    age: 23,
    name: 'Jip Koel',
    email: 'jip.koel@teleworm.us',
    role: 'Tour bus driver',
    linkedPeople: [],
  },
  {
    id: '4',
    age: 41,
    name: 'Rona Breet',
    email: 'rona.breet@rhyta.com',
    role: 'Facilitator',
    linkedPeople: [],
  },
];

/**
 * Updates a person in the people database
 *
 * @param person
 * @returns void
 */
export const patchPerson = (person: Person): Promise<void> => {
  console.log('ik backend patch');
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < people.length; i++) {
        if (people[i].id === person.id) {
          people[i] = person;
        }
      }

      resolve();
    }, 1000);
  });
};

/**
 * Returns list of all people

 * @returns list of people
 */
export const getPeople = (): Promise<Person[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(people);
    }, 1000);
  });
};
