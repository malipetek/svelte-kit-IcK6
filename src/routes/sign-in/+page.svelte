<script>
  // Import the auth service
  let email = '';
  let password = '';
  let message = '';

  // A function to handle the Google login button click
	/** @param {Event} event */
  async function handleGoogleLogin(event) {
    event.preventDefault();
    message = 'Logging in with Google...';
    const result = await auth.loginWithGoogle();
    if (result) {
      message = 'Logged in successfully.';
    } else {
      message = 'Login failed.';
    }
  }
</script>

<h1>Login</h1>

<form method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" bind:value={email} />
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" bind:value={password} />
  <button type="submit">Login</button>
</form>

<button on:click={handleGoogleLogin}>Login with Google</button>

<p>{message}</p>