import window from "./window.js";

const getData = async (search = "") => {
  const display = document.getElementById("display");
  display.innerText = "Loading...";
  let result =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/NYC?key=TCWU552NJCPQ67WVNLGBYKA9F";
  if (search)
    result = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=TCWU552NJCPQ67WVNLGBYKA9F`;
  try {
    const response = await fetch(result, { mode: "cors" });
    const json = await response.json();
    display.innerText = "";
    display.appendChild(window(json));
    console.log(json);
  } catch (error) {
    console.log(error);
    display.innerText = "Invalid entry, please try again.";
    console.log(search);
    console.log("error");
  }
};

const content = document.createElement("div");
content.id = "content";

const header = document.createElement("div");
header.innerText = "Weather App";
header.id = "header";
content.appendChild(header);
const main = document.createElement("div");
main.id = "main";
const search = document.createElement("input");
search.id = "search";
search.placeholder = "Search";
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getData(search.value);
});
const display = document.createElement("div");
display.id = "display";

main.appendChild(search);
main.appendChild(display);

content.appendChild(main);

const body = document.querySelector("body");
body.appendChild(content);

getData("albuqurque");
