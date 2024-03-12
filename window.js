export default function window(data) {
  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  header.innerText = data.resolvedAddress;
  const main = document.createElement("div");
  const curTemp = document.createElement("div");
  curTemp.innerText = `Current temperature: ${data.currentConditions.temp}`;

  const curCond = document.createElement("div");
  curCond.innerText = `Current conditions: ${data.currentConditions.conditions}`;

  main.appendChild(curTemp);
  main.appendChild(curCond);
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  return wrapper;
}
