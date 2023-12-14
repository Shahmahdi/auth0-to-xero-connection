import React, { useEffect, useState } from "react";
import { Auth0Lock } from "auth0-lock";
import AppContext from "./AppContext";
import { auth0Configuration } from "./auth0Config";

const auth0ClientId = "4DgJMKDtI2RwVehd95GyF67carzYsYsk"; // Xero connect
const auth0Domain = "dev-ati2w9dg.us.auth0.com"; // Xero connect

const Auth = props => {
  const [authLock, setAuthLock] = useState(undefined);
  useEffect(() => {
    const authLockObj = new Auth0Lock(
      auth0ClientId,
      auth0Domain,
      auth0Configuration()
    );
    setAuthLock(authLockObj);
  }, []);

  return (
    <AppContext.Provider
      value={{
        authLock
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Auth;
