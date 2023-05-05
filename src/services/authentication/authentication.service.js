import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export const registrationRequest = (email, password) => 
  createUserWithEmailAndPassword(getAuth(), email, password);

export const logoutRequest = () => 
  signOut(getAuth());