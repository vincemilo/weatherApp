export default async function gif(search) {
  const result = `https://api.giphy.com/v1/gifs/translate?api_key=VXQO4CocYmg03DHvfXyuUjLEzF2dujf6&s=${search}`;
  try {
    const response = await fetch(result, { mode: "cors" });
    const gifData = await response.json();
    return gifData.data.images.original.url;
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}
