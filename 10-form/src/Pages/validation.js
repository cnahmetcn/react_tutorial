import { object, string } from 'yup';

const contactSchema = object({
  name: string().required('Bu alan zorunludur.'),
  email: string().email('Geçerli bir mail adresi girin').required('Bu alan zorunludur.'),
  message: string().required('Bu alan zorunludur.').min(10, 'En az 10 karakter olmalıdır.'),
});

export default  contactSchema;