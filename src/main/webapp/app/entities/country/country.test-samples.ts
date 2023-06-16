import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 97461,
};

export const sampleWithPartialData: ICountry = {
  id: 71370,
  countryName: 'Program',
};

export const sampleWithFullData: ICountry = {
  id: 11949,
  countryName: 'channels Computers',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
