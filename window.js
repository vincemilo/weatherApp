import gif from "./gif.js";

export default function window(data) {
  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  header.innerText = data.resolvedAddress;
  const main = document.createElement("div");
  const alert = document.createElement("div");
  alert.className = "alert";
  if (data.alerts[0]) alert.innerText = data.alerts[0].event;
  const curTemp = document.createElement("div");
  curTemp.className = "temp-f";
  curTemp.innerText = `Current temperature: ${data.currentConditions.temp} F`;

  const curCond = document.createElement("div");
  curCond.innerText = `Current conditions: ${data.currentConditions.conditions}`;

  const img = document.createElement("img");
  (async () =>
    (img.src = await gif(`${data.currentConditions.conditions} weather`)))();
  main.appendChild(alert);
  main.appendChild(curTemp);
  main.appendChild(curCond);
  main.appendChild(img);
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  return wrapper;
}
