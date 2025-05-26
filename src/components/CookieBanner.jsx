import React from "react";
import CookieConsent from "react-cookie-consent";
import "../styles/cookieBanner.css";

const CookieBanner = () => {
  return (
<CookieConsent

  disableStyles={true}
  enableDeclineButton
  cookieName="damajaConsent"
  buttonText="Accept"
  declineButtonText="Reject"
  onAccept={() => console.log("Cookies accepted")}
  onDecline={() => console.log("Cookies declined")}
  containerClasses="cookie-banner"
  contentClasses="cookie-text"
  buttonClasses="cookie-accept"
  declineButtonClasses="cookie-reject"
>
  This website uses essential cookies to ensure its proper functioning. 
 We do not use tracking, advertising, or third-party cookies.
</CookieConsent>

  );
};

export default CookieBanner;
