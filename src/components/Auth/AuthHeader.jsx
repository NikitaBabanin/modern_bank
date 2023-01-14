import { Link } from 'react-router-dom';

import { logo } from '../../assets/index.js';

const AuthHeader = ({ heading, paragraph, linkName, linkUrl = '#' }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-7 w-15" src={logo} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">{heading}</h2>
      <p className="mt-2 text-center text-sm text-gray-400 mt-5">
        {paragraph}{' '}
        <Link to={linkUrl} className="font-medium text-teal-500 hover:text-teal-300">
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default AuthHeader;
