

document.querySelectorAll(".btn").forEach((boton) => {
  boton.addEventListener("click", () => {
    if (boton.value == "c") {
      document.getElementById("mostrar").innerHTML = "";
    } else if (boton.value == "=") {
      if (document.getElementById("mostrar").innerHTML != "") {
        document.getElementById("mostrar").innerHTML = eval(
          document.getElementById("mostrar").innerText
        );
      }
    } else if (boton.value == "<") {
      document.getElementById("mostrar").innerHTML = document
        .getElementById("mostrar")
        .innerText.slice(0, -1);
    } else {
      document.getElementById("mostrar").innerHTML += boton.value;
    }
  });
});
