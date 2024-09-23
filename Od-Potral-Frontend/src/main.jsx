import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authProvider.jsx";
import { OdProvider } from "./context/odProvider.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="875214990586-lbg0gtuminnbu0mjcastajnva35lf2ie.apps.googleusercontent.com">
      <AuthProvider>
        <OdProvider>
          <App />
        </OdProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
