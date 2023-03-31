<script>
  // Import the auth service
  import { auth } from '$lib/helpers/auth.server.js';

  // Declare some reactive variables for the form inputs and messages
  let email = '';
  let password = '';
  let message = '';

  // A function to handle the form submission
  /** @param {Event} event */
  async function handleSubmit(event) {
    event.preventDefault();
    message = 'Logging in...';
    const result = await auth.login(email, password);
    if (result) {
      message = 'Logged in successfully.';
    } else {
      message = 'Login failed.';
    }
  }

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

<form on:submit={handleSubmit}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />
  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} />
  <button type="submit">Login</button>
</form>

<button on:click={handleGoogleLogin}>Login with Google</button>

<p>{message}</p>;