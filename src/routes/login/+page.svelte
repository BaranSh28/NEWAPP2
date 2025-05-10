<script lang="ts">
  let username = '';
  let password = '';
  let error = '';

  async function handleLogin() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      error = 'Login failed. Try again.';
    }
  }
</script>

<h1>Login</h1>
<input placeholder="Username" bind:value={username} />
<input type="password" placeholder="Password" bind:value={password} />
<button on:click={handleLogin}>Login</button>
{#if error}<p style="color:red">{error}</p>{/if}
<a href="/protocol">
	<button style="margin-top: 2rem; padding: 0.5rem 1rem; background-color: #16a34a; color: white; border: none; border-radius: 5px;">
		Gå til Protokol
	</button>
</a>
