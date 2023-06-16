import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 7206,
  departmentName: 'katal',
};

export const sampleWithPartialData: IDepartment = {
  id: 85261,
  departmentName: 'quis Galveston Venezuela',
};

export const sampleWithFullData: IDepartment = {
  id: 57725,
  departmentName: 'Transmasculine Kids',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'methodical hop Convertible',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
