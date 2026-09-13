import { countries } from "./paises.js";
const overlay = document.getElementById('overlay');
const infoExtra = document.getElementById('infoExtra');
const boton = document.getElementById('btn-cerrar');

boton.addEventListener("click", () => {
    overlay.classList.add('hidden');
    document.body.classList.remove("no-scroll");
})

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
        document.body.classList.remove("no-scroll");
    }

})


function mostrarPaises() {
    const contenedor = document.getElementById("grid-paises");

    countries.forEach(country => {
        const card = document.createElement("div");
        card.classList.add("card");

        const nombre = document.createElement("h3");
        nombre.textContent = country.name;

        const flag = document.createElement("img");
        flag.src = `https://flagcdn.com/w160/${country.abbreviation.toLowerCase()}.png`;
        flag.alt = `Bandera de ${country.name}`;
        flag.classList.add("bandera-img");

        card.appendChild(nombre);
        card.appendChild(flag);

        card.addEventListener("click", () => {

            infoExtra.innerHTML = `
                <div class="modal-header">
                    <h2>${country.name}</h2>
                    <img 
                        src="https://flagcdn.com/w160/${country.abbreviation.toLowerCase()}.png" 
                        alt="Bandera de ${country.name}" 
                        class="modal-bandera"
                     >
                </div>
                <div class="modal-body">
                    <p><strong>Continente:</strong> ${country.continent}</p>
                    <p><strong>Idioma:</strong> ${country.language}</p>
                    <p><strong>Moneda:</strong> ${country.currency}</p>
                    <p><strong>Comida típica:</strong> ${country.food}</p>
                    <p><strong>Curiosidad:</strong> ${country.curiosity}</p>
                    <p class="modal-description"><strong>Descripcion: </strong>${country.description}</p>
                 </div>
                 `;

            overlay.classList.remove("hidden");
            document.body.classList.add("no-scroll");
        })

        contenedor.appendChild(card);


    });

}

document.addEventListener("DOMContentLoaded", mostrarPaises);
