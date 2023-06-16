import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 66312,
};

export const sampleWithPartialData: ITask = {
  id: 36697,
  title: 'Cambridgeshire SAS payment',
};

export const sampleWithFullData: ITask = {
  id: 36068,
  title: 'mole henry Schulist',
  description: 'Metal redundant Tennessine',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
