import { useEffect, useState } from 'react';
import { auth } from '../pages/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
return currentUser;
}

export default useAuth;