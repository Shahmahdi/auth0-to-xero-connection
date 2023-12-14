import SubiLogo from "./subi-logo.svg";
import XeroLogo from "./xero-logo.png";

export const auth0Configuration = () => ({
  auth: {
    audience: 'https://dev-ati2w9dg.us.auth0.com/api/v2/',
    params: {
      scope: 'openid profile email'
    },
    // params: config.internalOptions
    redirect: true
  },
  container: "hiw-login-container",
  // configurationBaseUrl: config.clientConfigurationBaseUrl,
  // overrides: {
  //   __tenant: config.auth0Tenant,
  //   __token_issuer: config.authorizationServer.issuer
  // },
  // assetsUrl:  config.assetsUrl,
  allowedConnections: [
    // "Username-Password-Authentication",
    // "apple",
    // "google-oauth2",
    // "facebook",
    "Xero"
  ],
  // rememberLastLogin: !prompt,
  // language: language,
  // languageBaseUrl: config.languageBaseUrl,
  // mustAcceptTerms: true,
  languageDictionary: {
    title: "",
    loginSubmitLabel: "Sign in",
    signUpSubmitLabel: "Register",
    signUpTitle: "Create your account",
    signUpTerms:
      "By creating an account means you agree to the Terms and Conditions, and our Privacy Policy",
    forgotPasswordTitle: "Password Reset",
    forgotPasswordInstructions: "Enter your email and we will send you a reset link",
    forgotPasswordSubmitLabel: "Send me the link",
    emailInputPlaceholder: "Type your e-mail",
    passwordInputPlaceholder: "Type your password",
    databaseEnterpriseAlternativeLoginInstructions: "",
    databaseAlternativeSignUpInstructions: ""
  },
  popupOptions: { width: 500, height: 400 },
  theme: {
    logo: SubiLogo,
    primaryColor: "#2A59FE",
    labeledSubmitButton: true,
    hideMainScreenTitle: true,
    authButtons: {
      // facebook: {
      //   displayName: " ",
      //   icon: FacebookLogo
      // },
      // "google-oauth2": {
      //   displayName: " ",
      //   icon: GoogleLogo
      // },
      // apple: {
      //   displayName: " ",
      //   icon: XeroLogo
      // },
      Xero: {
        displayName: "Xero",
        icon: XeroLogo,
        primaryColor: "#0078c8",
      }
    }
  },
  avatar: null,
  // prefill: loginHint ? { email: loginHint, username: loginHint } : null,
  closable: false,
  defaultADUsernameFromEmailPrefix: false,
  icon: false,
  // allowSignUp: false,
  // additionalSignUpFields: [
  //   {
  //     name: "orgName",
  //     placeholder: "Organization name",
  //     // The following properties are optional
  //     icon: OrgLogo,
  //     prefill: orgName ? orgName : undefined,
  //     validator: function (orgName) {
  //       return {
  //         valid: orgName.length >= 3,
  //         hint: "Must be 3 or more characters" // optional
  //       };
  //     }
  //   }
  // ]
});
