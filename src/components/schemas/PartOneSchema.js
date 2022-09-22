import * as Yup from "yup";

export const partOneSchema = Yup.object({
  subject : Yup.string("").required("Subject is required ."),
  fa :Yup.number().integer().positive()
  .min(0, 'Minimal value 0')
  .max(40, 'Maximum value 40')
  
  .required('FA is required. Please enter value from 0 till 40'),
  oral_one :Yup.number().integer().positive()
  .min(0, 'Minimal value 0')
  .max(10, 'Maximum value 10') 
  .required('Oral is required. Please enter value from 0 till 10'),
  sa :Yup.number().integer().positive()
  .min(0, 'Minimal value 0')
  .max(40, 'Maximum value 40') 
  .required('SA is required. Please enter value from 0 till 40'),
  oral_two :Yup.number().integer().positive()
  .min(0, 'Minimal value 0')
  .max(10, 'Maximum value 10') 
 .required('Oral is required. Please enter value from 0 till 10')
});
