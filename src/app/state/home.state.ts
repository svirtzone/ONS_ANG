import Home from '../model/home.model';

export default class HomeState {
  Homes: Array<Home>;
  HomeError: Error;
}

export const initializeState = (): HomeState => {
  return { Homes: Array<Home>(), HomeError: null };
};
