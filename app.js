const form = document.getElementById("gorev-form");
const girdi = document.getElementById("gorev-girdi");
const liste = document.getElementById("gorev-listesi");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const metin = document.createElement("span");
  metin.textContent = girdi.value;
  const sil = document.createElement("button");
  sil.className = "sil";
  sil.textContent = "Sil";
  sil.addEventListener("click", () => li.remove());
  li.append(metin, sil);
  liste.appendChild(li);
  girdi.value = "";
});
