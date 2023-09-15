/**
 * Copies JSON data so that it can be type cast by the variable that caches the returned string.
 * @param data
 * @returns
 */
export const json2Ts = (data: any) => {
  const stringified = JSON.stringify(data);
  return JSON.parse(stringified);
};