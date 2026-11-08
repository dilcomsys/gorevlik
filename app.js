const form = document.getElementById("gorev-form");
const girdi = document.getElementById("gorev-girdi");
const liste = document.getElementById("gorev-listesi");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const kutu = document.createElement("input");
  kutu.type = "checkbox";
  kutu.setAttribute("aria-label", "Tamamlandı");
  kutu.addEventListener("change", () => li.classList.toggle("bitti", kutu.checked));
  const metin = document.createElement("span");
  metin.textContent = girdi.value;
  const sil = document.createElement("button");
  sil.className = "sil";
  sil.textContent = "Sil";
  sil.addEventListener("click", () => li.remove());
  li.append(kutu, metin, sil);
  liste.appendChild(li);
  girdi.value = "";
});
