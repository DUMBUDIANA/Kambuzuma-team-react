
import { projectAuth } from '../pages/Firebase'

let error = null;

const login = async (email, password) => {
  error = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    console.log(res.user);
  } catch (err) {
    error = err.message;
    console.log(error);
  }
};

const logOut = async () => {
  try {
    await projectAuth.signOut();
  } catch (err) {
    error = err.message;
    console.log(error);
  }
};

const userLogin = () => {
  return { error, login, logOut };
};

export default userLogin;