import { Signup } from '../components';
import AuthHeader from '../components/Auth/AuthHeader.jsx';

const SignupPage = () => {
  return (
    <div className="bg-gray-800 min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AuthHeader
          heading="Create account"
          paragraph="Do you have account yet ?"
          linkName="Login"
          linkUrl="/login"
        />
        <Signup />
      </div>
    </div>
  );
};
export default SignupPage;
