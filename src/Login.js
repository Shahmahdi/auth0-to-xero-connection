import React, { useEffect, useContext } from "react";
import "./Login.css";
import AppContext from "./AppContext";
// import { setAuthResult, resetAuth, logout, setIsSignup } from "./reducer";
// import { setUserData } from "../../reducers/user";
// import { useDispatch, useSelector } from "react-redux";
// import { Grid } from "@mui/material";
// import { useHistory } from "react-router-dom";
// import AppContext from "../../AppContext";
// import queryString from "query-string";
// import { createBusinessCustomer } from "./actions";
// import { seedaNamespace } from "../../configs/config";

export const Login = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const { loginReducer } = useSelector(state => state);
  const appContext = useContext(AppContext);
  const { authLock } = appContext;

  // useEffect(() => {
  //   if (loginReducer.isLogoutClicked) {
  //     dispatch(logout());
  //   }
  // }, [loginReducer.isLogoutClicked, dispatch]);

  useEffect(() => {
    // const socialLoginSubs = ["google-oauth2", "facebook", "apple"];
    if (authLock) {
      // authLock.on("signup ready", () => {
      //   window.newrelic && window.newrelic.addPageAction('SIGNUP_PAGE_LOAD');
      //   dispatch(setIsSignup(true));
      //   const params = queryString.parse(window.location.search);
      //   const element = document.getElementsByClassName(
      //     "auth0-lock-input-orgName"
      //   )[0];
      //   if (element && params.organization_name) {
      //     element.style.display = "none";
      //   }
      // });
      // authLock.on("signup submit", function () {
      //   window.newrelic && window.newrelic.addPageAction('SIGNUP_BUTTON_CLICK');
      // });
      // authLock.on("signin ready", function () {
      //   window.newrelic && window.newrelic.addPageAction('LOGIN_PAGE_LOAD');
      //   dispatch(setIsSignup(false));
      // });
      // authLock.on("signin submit", function () {
      //   window.newrelic && window.newrelic.addPageAction("LOGIN_BUTTON_CLICK");
      // });
      // authLock.on("federated login", connectionName => {
      //   if (connectionName.action === "signup") {
      //     window.newrelic &&
      //       window.newrelic.addPageAction(
      //         `SOCIAL_BUTTON_CLICK_${connectionName.strategy}`
      //       );
      //   }
      // });
      authLock.on("unrecoverable_error", error => {
        authLock.show({
          flashMessage: {
            type: "error",
            text: error.errorDescription
          }
        });
        // dispatch(resetAuth());
      });
      authLock.on("authorization_error", error => {
        authLock.show({
          flashMessage: {
            type: "error",
            text: error.errorDescription
          }
        });
        // dispatch(resetAuth());
      });
      authLock.on("authenticated", authResult => {
        console.log(`authResult: ${JSON.stringify(authResult)}`);
        // dispatch(setAuthResult(authResult));
        authLock.getUserInfo(
          authResult.accessToken,
          function (error, profileResult) {
            if (error) {
              return;
            }
            console.log(`profileResult: ${JSON.stringify(profileResult)}`);
            // dispatch(setUserData(profileResult));
            // let isSocialAuth = false;
            // socialLoginSubs.forEach(socialSub => {
            //   if (profileResult.sub.includes(socialSub)) {
            //     isSocialAuth = true;
            //   }
            // });
            // if (
            //   !isSocialAuth &&
            //   !profileResult[`${seedaNamespace}/user_metadata`].userCreationInitiated &&
            //   profileResult.email_verified
            // ) {
            //   dispatch(
            //     createBusinessCustomer(authResult.accessToken, {
            //       orgName: profileResult[`${seedaNamespace}/user_metadata`].orgName,
            //       email: profileResult.email,
            //       userId: profileResult.sub
            //     })
            //   );
            //   return history.push("/onboarding");
            // }
            // if (isSocialAuth && loginReducer.isSignup) {
            //   return history.push("/organization-setup");
            // }
            // if (!profileResult.email_verified) {
            //   history.push("/verify-email");
            // } else {
            //   history.push("/dashboard");
            // }
            // authLock.hide();
          }
        );
      });
    }
  // }, [history, dispatch, authLock, loginReducer]);
}, [authLock]);

  useEffect(() => {
    // console.log(`=======authLock: `, authLock);
    if (authLock) {
      console.log(`-----has authLock`);
      authLock.show();
    }
  }, [authLock]);

  return (
    <div className="Login" id="hiw-login-container">
      {console.log(`=======authLock: `, authLock)}
      <div className="main-container"></div>
    </div>
  );
};
