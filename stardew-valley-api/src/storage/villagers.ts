import { Villager } from '../types/villagers';

const villagerStore: Villager[] = [
  {
    id: '1',
    name: 'Alex',
    image: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png',
  },
  {
    id: '2',
    name: 'Elliott',
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png',
  },
];

export const readVillagers = (): Promise<Villager[]> =>
  Promise.resolve(villagerStore);
