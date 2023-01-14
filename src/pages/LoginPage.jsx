import { Login } from '../components';
import AuthHeader from '../components/Auth/AuthHeader.jsx';

const LoginPage = () => (
  <div className="bg-gray-800 min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <AuthHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  </div>
);

export default LoginPage;
