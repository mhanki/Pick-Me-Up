import { useState, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { loginRequest, registrationRequest, logoutRequest } from "./authentication.service";

const firebaseConfig = {
  apiKey: "AIzaSyApizldNEz3oVcvsSoKF6-tbpe8cXICMBQ",
  authDomain: "meals-to-go-4e0d3.firebaseapp.com",
  projectId: "meals-to-go-4e0d3",
  storageBucket: "meals-to-go-4e0d3.appspot.com",
  messagingSenderId: "1097819191611",
  appId: "1:1097819191611:web:7c4fa809ae43b7d93e9f1e"
};

initializeApp(firebaseConfig);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(getAuth(), (usr) => {
    if (usr) {
      setUser(usr);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    };

    registrationRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    logoutRequest()
      .then(() => {
        setUser(null);
        setError(null);
      });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};