/**
 * Provides a wrapper for making HTTP requests to the API
 * 
 * @param {string} endpoint - The endpoint to make the request to
 * @param {object} options - The options to pass to the fetch function
 * @returns {Promise<object>} The response from the API
 * @throws {Error} If the request fails
 */
export const apiFetch = async (endpoint, options) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api${endpoint}`, options);
    return await response.json();
  } catch (error) {
    throw error;
  }
}
