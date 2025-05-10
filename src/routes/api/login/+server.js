// src/routes/api/login/+server.js
export async function POST({ request, cookies }) {
	const { username, password } = await request.json();

	if (username === 'telemed24' && password === 'telemed24') {
		cookies.set('session', 'admin', {
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60 // 1 hour
		});
		return new Response('Logged in', { status: 200 });
	}

	return new Response('Unauthorized', { status: 401 });
}
