import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 33434,
};

export const sampleWithPartialData: IEmployee = {
  id: 42700,
  lastName: 'Cartwright',
  hireDate: dayjs('2023-06-16T03:04'),
  salary: 26461,
};

export const sampleWithFullData: IEmployee = {
  id: 30831,
  firstName: 'Tierra',
  lastName: 'Mayer',
  email: 'Nikolas_Hickle@hotmail.com',
  phoneNumber: 'Bedfordshire',
  hireDate: dayjs('2023-06-16T04:31'),
  salary: 94555,
  commissionPct: 59356,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
