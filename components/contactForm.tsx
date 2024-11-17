// components/ContactForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Le nom est requis'),
  email: Yup.string().email('Email invalide').required('L\'email est requis'),
  message: Yup.string().required('Le message est requis'),
});

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex-1 p-8  m-5 rounded-md (0.375rem ou 6px) cursor-pointer style={{ height: '50vh' }}">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              {...register('name')}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm ">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              {...register('message')}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Envoyer</button>
        </form>
      </div>

      <div className="flex-1 bg-cover bg-center m-5" style={{
         backgroundImage: 'url(https://media.istockphoto.com/id/1344939844/fr/photo/lampe-virtuelle-de-dessin-tenant-la-main-avec-le-cerveau-sur-fond-bokeh-pour-une-id%C3%A9e.jpg?b=1&s=612x612&w=0&k=20&c=s3gtcLJApRypCM_5Y0eMak8Kz3hxHG5DLUYGe7QImLc=)', 
         backgroundPosition:'center',
         backgroundSize:'cover ',
         backgroundRepeat:'no-repeat',
         height:'50vh',
         }}> 
       
       </div>
    </div>
  );
};

export default ContactForm;

