import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const dynamic = 'force-dynamic';

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: process.env.AUTH0_AUDIENCE,
      scope: 'openid profile email offline_access',
    },
    returnTo: '/profile',
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: 'signup',
      audience: process.env.AUTH0_AUDIENCE,
      scope: 'openid profile email offline_access',
    },
    returnTo: '/emailVerify',
  }),
});
