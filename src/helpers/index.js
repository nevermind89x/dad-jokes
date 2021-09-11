/**
 * Gets API url with query params
 * @param {string} url current uri
 * @param {object} params params to append
 * @returns {string}
 */
export function getAPIUrl(url, params = {}) {
  const urlParams = new URLSearchParams(params);
  return `${url}?${urlParams}`;
}
