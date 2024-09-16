import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./context/authProvider.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { OdProvider } from "./context/odProvider.tsx";

createRoot(document.getElementById("root")!).render(
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
