const h2 = document.createElement("h2")
h2.textContent = "Enterate de las nuevas novedades!"
document.body.appendChild(h2)

const p1 = document.createElement("p")
p1.textContent = "Nuevas noticias"
document.body.appendChild(p1)

console.log(document.getElementById("conid").textContent)
console.log(document.getElementById("hola").innerHTML)

const boton3 = document.getElementById("boton")
boton3.onclick= function() {
    alert("acabas de enviar tus datos exitosamente!");
};

const informacion = document.getElementById("info");

function mostrarInfo(event) {
    informacion.innerHTML = `
        <strong>Tipo de evento:</strong> ${event.type} <br>
        <strong>Elemento origen:</strong> ${event.target.tagName} (id="${event.target.id}") <br>
        <strong>Posición X:</strong> ${event.clientX} <br><br>
        <h1>hello:</h1>
    `;
}

informacion.style.backgroundColor = "#e7f3ff"
informacion.style.borderRadius = "14px"
informacion.style.color = "#3a3b4e"
document.getElementById("btn").addEventListener("click", mostrarInfo)

