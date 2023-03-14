import { useState } from 'react';
import InputField from '../../../components/Input/InputField';
import AuthSubmitBtn from './authSubmitBtn';
// ## Formik

import { useFormik, FormikProps } from 'formik';
import * as yup from 'yup';
// ## Models
import { LoginValues } from '../../../models';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginForm = () => {
  const [isEncrypt, setIsEncrypt] = useState<boolean>(true);
  const toggleEncrypt = () => {
    setIsEncrypt(!isEncrypt);
  };
  const initialValues = {
    username: localStorage.getItem('username') || '',
    password: '',
  };

  const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const onSubmit = async (): Promise<void> => {
    try {
    } catch (err) {
      if (err instanceof Error) {
        // console.log(err.message, err.name);
      } else {
      }
    }
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
  }: FormikProps<LoginValues> = useFormik<LoginValues>({
    onSubmit,
    initialValues,
    validationSchema,
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mt-8 space-y-6"
      >
        <InputField
          placeholder={'Nombre de usuario'}
          labelClassname="sr-only"
          inputClassname={'input-style'}
          label="Nombre de usuario"
          inputName="username"
          value={values.username}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={
            touched.username && errors.username ? errors.username : null
          }
        />
        <InputField
          placeholder={'Contraseña'}
          labelClassname="sr-only"
          inputClassname={'input-style'}
          label="Contraseña"
          inputName="password"
          type={isEncrypt ? 'password' : 'text'}
          icon={isEncrypt ? <FiEyeOff /> : <FiEye />}
          iconFX={toggleEncrypt}
          iconPosition="right"
          value={values.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={
            touched.password && errors.password ? errors.password : null
          }
        />
        <div>
          <AuthSubmitBtn btnText="Ingresar" />
        </div>
      </form>
      {/* <div className="flex items-center justify-center ">
        <div className="text-sm">
          <a
            href="/auth/register"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Aún no tienes cuenta? Creala aqui!
          </a>
        </div>
      </div> */}
    </>
  );
};

export default LoginForm;
