import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const session = event.cookies.get('session');
  if (event.url.pathname.startsWith('/dashboard') && session !== 'admin') {
    return Response.redirect(new URL('/login', event.url));
  }
  return resolve(event);
};