// Private prototype: only people with the password can open it (Dana and Byron).
// The password is not stored here, only its SHA-256 hash.
export const config = { matcher: '/:path*' };
const USER = '3rivers';
const HASH = '2dba67aeccbf420bcec4e1a8adf7a9fb7e25618a8d9eed028a10561a0e1d35b0';
async function sha(t) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}
export default async function middleware(request) {
  const h = request.headers.get('authorization') || '';
  if (h.startsWith('Basic ')) {
    try {
      const [u, ...rest] = atob(h.slice(6)).split(':');
      if (u === USER && await sha(rest.join(':')) === HASH) return;
    } catch (e) {}
  }
  return new Response('Private prototype. Ask LATO AI for access.', {
    status: 401, headers: { 'WWW-Authenticate': 'Basic realm="3Rivers prototype", charset="UTF-8"' } });
}
