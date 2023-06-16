import dayjs from 'dayjs/esm';

import { Language } from 'app/entities/enumerations/language.model';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 95076,
};

export const sampleWithPartialData: IJobHistory = {
  id: 70607,
  language: 'FRENCH',
};

export const sampleWithFullData: IJobHistory = {
  id: 19605,
  startDate: dayjs('2023-06-16T16:13'),
  endDate: dayjs('2023-06-15T23:37'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
