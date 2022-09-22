import * as Yup from "yup";

export const partThreeSchema = Yup.object({
  wd : Yup.number().integer().positive().required("Please fill"),
   dp :Yup.number().integer().positive().required("Please fill").min(0,'Minimal value 0')
 });