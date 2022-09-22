import * as Yup from "yup";

export const partTwoSchema = Yup.object({
  subject : Yup.string().required("Please select a subject"),
   grade :Yup.string().required("Please select a grade")
 });
