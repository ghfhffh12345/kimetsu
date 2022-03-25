export async function get() {
  const news = await (await fetch("https://kimetsu.com/news/")).text();
  return { body: { news } };
}
