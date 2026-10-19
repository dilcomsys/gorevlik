const form = document.getElementById("gorev-form");
const girdi = document.getElementById("gorev-girdi");
const liste = document.getElementById("gorev-listesi");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = girdi.value;
  liste.appendChild(li);
  girdi.value = "";
});
