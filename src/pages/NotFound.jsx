import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center font-sans">
       <h1 className="text-8xl font-bold text-white mb-4 select-none">404</h1>
       
       <h2 className="text-xl text-white font-medium mb-2">Page Not Found</h2>
       
       <p className="text-white mb-8 text-sm max-w-sm mx-auto">
          The page <code className="text-slate-200 bg-slate-800/50 px-1.5 py-1 rounded font-mono">{location.pathname}</code> doesn't exist or has been moved.
       </p>

       <Link 
         to="/" 
         replace
         className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium border border-slate-700"
       >
         <ArrowLeft size={16} />
         <span>Back to Home</span>
       </Link>
    </div>
  );
};

export default NotFound;