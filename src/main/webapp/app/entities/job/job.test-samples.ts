import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 1548,
};

export const sampleWithPartialData: IJob = {
  id: 21555,
};

export const sampleWithFullData: IJob = {
  id: 35156,
  jobTitle: 'Principal Branding Consultant',
  minSalary: 43286,
  maxSalary: 27711,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
