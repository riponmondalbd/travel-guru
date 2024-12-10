import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

// const auth = getAuth(app);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //   login user using google
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   login user using github
  const gitHubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = { user, loader, googleLogin, gitHubLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
