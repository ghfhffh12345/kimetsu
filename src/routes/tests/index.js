import { getURL } from "$lib/javascript/api.js";

export async function get() {
  const url = await getURL("681694668?h=4b7188c2f4");
  return { body: { url } };
}
