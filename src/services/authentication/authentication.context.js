import { useState, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { loginRequest } from "./authentication.service";

const firebaseConfig = {
  apiKey: "AIzaSyApizldNEz3oVcvsSoKF6-tbpe8cXICMBQ",
  authDomain: "meals-to-go-4e0d3.firebaseapp.com",
  projectId: "meals-to-go-4e0d3",
  storageBucket: "meals-to-go-4e0d3.appspot.com",
  messagingSenderId: "1097819191611",
  appId: "1:1097819191611:web:7c4fa809ae43b7d93e9f1e"
};

const app = initializeApp(firebaseConfig);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);

    loginRequest(app, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};