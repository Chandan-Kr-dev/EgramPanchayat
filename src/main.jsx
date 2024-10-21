import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Componets/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-xpxdpzskl8clxgxm.us.auth0.com"
      clientId="cJYSnz7nZHyMqWSg0KkceFFYlWX79wXh"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeProvider>
        <Navbar/>
        <App />
      </ThemeProvider>
      ,
    </Auth0Provider>
  </StrictMode>
);
