import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-12 text-center min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-red-500 to-orange-500 m-0 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
      <p className="mb-8 text-gray-500">The page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors no-underline">
        Go back to Home
      </Link>
    </div>
  );
};
export default NotFound;