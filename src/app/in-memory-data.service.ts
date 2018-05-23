import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const wilders = [
      {
        name: 'Justine',
        role: 'Campus Manager'
      },
      {
        name: 'Benoit',
        role: 'Gourou du JS'
      },
      {
        name: 'Bastien',
        role: 'Inventeur de Java'
      },
      {
        name: 'John',
        role: 'Elève'
      },
      {
        name: 'Léa',
        role: 'Elève'
      },
      {
        name: 'Maeva',
        role: 'Elève'
      },
      {
        name: 'Lucas',
        role: 'Elève'
      },
      {
        name: 'Tristan',
        role: 'Elève'
      },
      {
        name: 'Julie',
        role: 'Elève'
      }
    ];
    return {wilders};
  }
}
