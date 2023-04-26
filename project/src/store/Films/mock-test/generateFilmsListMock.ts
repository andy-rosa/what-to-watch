import {Films} from '../../../types/films';
import {GenreName} from '../../../types/genre';

type FilmsListLength = number;

export function generateFilmsListMock(length: FilmsListLength): Films[] {
  return Array.from({length}, (_, id) => ({
    id: id ,
    name: `Film ${id}`,
    // posterImage: '',
    // previewImage: '',
    // backgroundImage: '',
    // backgroundColor: '',
    // videoLink: '',
    // previewVideoLink: '',
    // description: '',
    // rating: Math.round(Math.random() * 10),
    // scoresCount: 0,
    // director: '',
    // starring: [],
    // runTime: 0,
    // genre: GenreName.CRIME,
    // released: 0,
    // isFavorite: false
  })) as Films[];
}

export function getFilmsListWithGenreMock(): Films[] {
  return [
    {
      id: 1,
      name: 'Film 1',
      genre: GenreName.CRIME,
    },
    {
      id: 2,
      name: 'Film 2',
      genre: GenreName.HORROR,
    },
    {
      id: 3,
      name: 'Film 3',
      genre: GenreName.COMEDIES,
    }
  ] as Films[];
}
