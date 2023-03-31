// Import the Directus SDK instance
import directus from '$lib/partials/directus.server.js';

// Create and export a custom auth service
export const auth = {
  // A method to log in with email and password
  /** 
   * @param {object} data
   * @param {string} data.email
   * @param {string} data.password
   * @returns {Promise<import('@directus/sdk').AuthResult|unknown>}
   * */
  async login({email, password}) {
    try {
      // Call the SDK login method
      const result = await directus.auth.login({ email, password });
      // Return true if successful
      return result;
    } catch (error) {
      // Return false if failed
      return error;
    }
  },

  // A method to log out
  async logout() {
    try {
      // Call the SDK logout method
      await directus.auth.logout();
      // Return true if successful
      return true;
    } catch (error) {
      // Return false if failed
      return false;
    }
  },

  // A method to get the current user data
  async getUser() {
    try {
      // Call the SDK user method
      const user = await directus.auth.user();
      // Return the user data if found
      return user;
    } catch (error) {
      // Return null if not found
      return null;
    }
  },

  // A method to check if the user is logged in
  isLoggedIn() {
    // Return the SDK loggedIn property
    return directus.auth.loggedIn;
  },

  // A method to log in with Google
  async loginWithGoogle() {
    try {
      // Call the SDK oauth method with Google as the provider
      await directus.auth.oauth('google');
      // Return true if successful
      return true;
    } catch (error) {
      // Return false if failed
      return false;
    }
  },

  // Add more methods as needed ...
};