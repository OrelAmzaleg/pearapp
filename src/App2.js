import React, { useState, useEffect } from 'react';
import MyForm from './MyForm';
import LoginSignUp from './LoginSignUp';
import UserProfile from './UserProfile';
import AgeFilteredUsersList  from './AgeFilteredUsersList ';
import UserFiles from './UserFiles';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <h1>Firebase Authentication</h1>
      <LoginSignUp />

      {isUserSignedIn && (
        <>
          <h1>Simple Firebase Firestore Form</h1>
          <MyForm />

          <h1>Name</h1>
          <UserProfile />
          <h1>UsersList</h1>
          <AgeFilteredUsersList  />
          <h1>Users Files</h1>
          <UserFiles  />
        </>
      )}
    </div>
  );
}

export default App;
