import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 83586,
};

export const sampleWithPartialData: ILocation = {
  id: 69961,
  streetAddress: 'Chair',
  postalCode: 'Southwest',
  city: 'Quitzonberg',
  stateProvince: 'Southeast',
};

export const sampleWithFullData: ILocation = {
  id: 22080,
  streetAddress: 'pink Krone',
  postalCode: 'ducimus Devolved Factors',
  city: 'South Louiebury',
  stateProvince: 'neural B2C',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
