import gif from "./gif.js";

export default function window(data) {
  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  const header = document.createElement("div");
  header.innerText = data.resolvedAddress;
  const alert = document.createElement("div");
  alert.className = "alert";
  const curTemp = document.createElement("div");
  curTemp.className = "temp";
  curTemp.innerText = `Current temperature: ${data.currentConditions.temp} F`;
  curTemp.addEventListener("click", () => {
    curTemp.classList.toggle("c");
    if (curTemp.className === "temp c") {
      curTemp.innerText = `Current temperature: ${
        Math.round(((data.currentConditions.temp - 32) / 1.8) * 10) / 10
      } C`;
    } else {
      curTemp.innerText = `Current temperature: ${data.currentConditions.temp} F`;
    }
  });

  const curCond = document.createElement("div");
  curCond.innerText = `Current conditions: ${data.currentConditions.conditions}`;

  const img = document.createElement("img");
  (async () =>
    (img.src = await gif(`${data.currentConditions.conditions} weather`)))();
  wrapper.appendChild(header);
  if (data.alerts[0]) {
    alert.innerText = data.alerts[0].event;
    wrapper.appendChild(alert);
  }
  wrapper.appendChild(curTemp);
  wrapper.appendChild(curCond);
  wrapper.appendChild(img);
  return wrapper;
}
