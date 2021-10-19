import React from 'react';
import useAuth from '../../../hooks/useAuth';




const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
      <div>
        <button onClick={signInUsingGoogle} className="btn btn-primary">
          Sign-In With Google
        </button>
      </div>
    );
};

export default LogIn;