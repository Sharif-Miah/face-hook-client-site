/* eslint-disable no-extra-boolean-cast */
import { useForm } from 'react-hook-form';
import Field from '../../common/Field/Field';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../../../hook/useAuth';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setAuth } = useAuth();

  const toistfy = () => toast.success('Successfully Login!');

  const navigate = useNavigate();

  const handleForm = (formData) => {
    console.log(formData);

    // Make in api call
    // Will Return Token And Loged In User Information

    const user = { ...formData };
    setAuth({ user });

    navigate('/');
    toistfy();
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
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
      <Field>
        <button
          className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
          type='submit'>
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
