/**
 * Wrapper around window.fetch
 * @param  {...any} args
 */
export default async function (...args) {
  const response = await window.fetch(...args);
  if (response.ok) {
    return response.json();
  }
  if (response.state >= 400 && response.state < 600) {
    throw new Error("Error getting response from server");
  }
}
