import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password);

export const registrationRequest = (email, password) => 
  createUserWithEmailAndPassword(getAuth(), email, password);