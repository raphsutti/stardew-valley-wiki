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
  {
    id: '3',
    name: 'Harvey',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png',
  },
  {
    id: '4',
    name: 'Sam',
    image: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png',
  },
  {
    id: '5',
    name: 'Sebastian',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png',
  },
  {
    id: '6',
    name: 'Shane',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png',
  },
  {
    id: '7',
    name: 'Abigail',
    image: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png',
  },
  {
    id: '8',
    name: 'Emily',
    image: 'https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png',
  },
  {
    id: '9',
    name: 'Haley',
    image: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png',
  },
  {
    id: '10',
    name: 'Leah',
    image: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png',
  },
  {
    id: '11',
    name: 'Maru',
    image: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png',
  },
  {
    id: '12',
    name: 'Penny',
    image: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png',
  },
];

export const readVillagers = (): Promise<Villager[]> =>
  Promise.resolve(villagerStore);
