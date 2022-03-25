export async function getURL(id) {
  const link = `https://player.vimeo.com/video/${id}`;
  const text = await (await fetch(link)).text();
  let url = text.slice(text.indexOf("prog"));
  url = url.slice(0, url.indexOf('"quality":"1080p"'));
  url = url.slice(url.lastIndexOf("ht"), url.lastIndexOf("mp") + 3);
  return url;
}
