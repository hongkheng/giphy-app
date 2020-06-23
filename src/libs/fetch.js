/**
 * Wrapper around window.fetch
 * @param  {...any} args 
 */
export default async function (...args) {
  const response = await window.fetch(...args);
  return response.json()
}
