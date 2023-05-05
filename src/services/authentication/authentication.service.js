
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (app, email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password)
};