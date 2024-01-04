import * as yup from 'yup';

export const sampleValidation = yup
  .object({
    name: yup.string().required().min(1),
    description: yup.string(),
    website: yup.string().required().url(),
    address: yup.string(),
    categories: yup.array(yup.string()).min(1),
    level: yup.number().required().min(1).max(10),
  })
  .required();

export type SampleValidationDto = yup.InferType<typeof sampleValidation>;
