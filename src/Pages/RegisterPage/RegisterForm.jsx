/* eslint-disable no-extra-boolean-cast */
import { useForm } from 'react-hook-form';
import Field from '../../component/common/Field/Field';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const toistfy = () => toast.success('Successfully Register!');

  const handleForm = async (formData) => {
    console.log(formData);
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      setError('root.random', {
        type: 'random',
        message: `Somthing went wrong ${error.message}`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Field
        error={errors.firstName}
        label='First Name'>
        <input
          {...register('firstName', { required: 'First Name is requerd' })}
          type='firstName'
          name='firstName'
          id='firstName'
          placeholder='FirstName'
          className={`auth-input ${
            !!errors.email ? 'border-red-500' : 'border-gray-200'
          } `}
        />
      </Field>
      <Field
        error={errors.lastName}
        label='LastName'>
        <input
          {...register('lastName')}
          type='lastName'
          name='lastName'
          id='lastName'
          placeholder='LastName'
          className='auth-input'
        />
      </Field>
      <Field
        error={errors.email}
        label='email'>
        <input
          {...register('email', { required: 'Email is requerd' })}
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className={`auth-input ${
            !!errors.email ? 'border-red-500' : 'border-gray-200'
          } `}
        />
      </Field>

      <Field
        error={errors.password}
        label='password'>
        <input
          {...register('password', {
            required: 'password is requerd',
            minLength: {
              value: 8,
              message: 'Your password must be at least 8 characters',
            },
          })}
          type='password'
          name='password'
          id='password'
          placeholder='password'
          className={`auth-input ${
            !!errors.password ? 'border-red-500' : 'border-gray-200'
          } `}
        />
      </Field>
      <div>
        <p className='my-2 text-red-500'>{errors?.root?.random?.message}</p>
      </div>
      <Field>
        <button
          className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
          type='submit'>
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegisterForm;
