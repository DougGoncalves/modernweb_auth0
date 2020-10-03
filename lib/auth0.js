import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: 'https://modernweb-auth0.vercel.app/api/callback',
  postLogoutRedirectUri: 'https://modernweb-auth0.vercel.app',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
   
  }
});
