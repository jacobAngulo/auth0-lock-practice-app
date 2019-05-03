import React from "react";
import Auth0Lock from "auth0-lock";

const lock = new Auth0Lock("YOUR_CLIENT_ID", "YOUR_DOMAIN", {
  auth: {
    redirectUrl: "https://flamboyant-mcclintock-855856.netlify.com/",
    responseType: "code",
    params: {
      scope: "openid email" // Learn about scopes: https://auth0.com/docs/scopes
    }
  }
});

function App() {
  return (
    <div>
      <button onClick={lock.show}>auth0 lock</button>
    </div>
  );
}

export default App;
