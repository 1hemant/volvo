import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'name0',
        surname: 'surname0',
        birthDate: '24-8-1981',
        phone: '634523125',
        city: 'Wroclaw',
        street: 'Mydlana',
        number: 1
      },
      {
        id: 2,
        name: 'name1',
        surname: 'surname1',
        birthDate: '28-9-1983',
        phone: '812312312',
        city: 'Warsaw',
        street: 'Domaniewska',
        number: 2
      },
      {
        id: 3,
        name: 'name2',
        surname: 'surname2',
        birthDate: '01-6-1986',
        phone: '987654412',
        city: 'Wroclaw',
        street: 'Mydlana',
        number: 3
      },
      {
        id: 4,
        name: 'name3',
        surname: 'surname3',
        birthDate: '05-5-1978',
        phone: '812312312',
        city: 'Wroclaw',
        street: 'Himalajska',
        number: 4
      },
      {
        id: 5,
        name: 'name4',
        surname: 'surname4',
        birthDate: '05-08-1971',
        phone: '812312312',
        city: 'Wroclaw',
        street: 'Himalajska',
        number: 5
      }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
