import { useAuth } from '@clerk/clerk-react';
import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { MyGlobalContext } from '@/hooks/useContext'

const PrivateRoute = () => {
  const { setUser } = useContext(MyGlobalContext);
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setUser(true);
    } else if (isLoaded && !isSignedIn) {
      setUser(false);
    }
  }, [isLoaded, isSignedIn, setUser]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div>
    );
  }

  if (isSignedIn) {
    return <Outlet />;
  }

  return <Navigate to='/' />;
}

export default PrivateRoute;