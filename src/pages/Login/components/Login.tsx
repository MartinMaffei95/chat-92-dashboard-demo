import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="bg-slate-200 w-full h-full rounded flex flex-col justify-center items-center sm:w-[60vw] sm:h-[80vh]">
      <h3 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Login
      </h3>
      <LoginForm />
    </div>
  );
};

export default Login;
