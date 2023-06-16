import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 39431,
};

export const sampleWithPartialData: IRegion = {
  id: 32161,
};

export const sampleWithFullData: IRegion = {
  id: 78542,
  regionName: 'Austria',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
