import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_APP_AUTH0_AUDIENCE;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    audience={audience}
    redirectUri={window.location.origin}
    useRefreshTokens={true}>
    <App />
  </Auth0Provider>
  // </React.StrictMode>
);
