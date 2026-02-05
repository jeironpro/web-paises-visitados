fetch("../json/paises.json")
    .then(response => response.json())
    .then(data => {
        const contenedorPaises = document.getElementById("contenedor-paises");
        const inputBuscar = document.getElementById("buscador");

        const mostrarPaisesPorContinente = (data) => {
            contenedorPaises.innerHTML = '';

            const paisesVisitados = [];

            for (const continente in data) {
                for (const pais of data[continente]) {
                    if (pais.visitado) {
                        paisesVisitados.push({ ...pais, continente });
                    }
                }
            }

            if (paisesVisitados.length > 0) {
                const tituloVisitados = document.createElement("h2");
                tituloVisitados.textContent = "Visitados";
                contenedorPaises.appendChild(tituloVisitados);

                paisesVisitados.forEach(pais => {
                    const div = document.createElement("div");
                    const p = document.createElement("p");
                    p.textContent = pais.nombre;
                    div.appendChild(p);

                    const icono = document.createElement("i");
                    icono.className = "fa-solid fa-check icono";
                    div.appendChild(icono);

                    div.style.backgroundImage = `url(img/${pais.iso.toLowerCase()}.png)`;
                    div.classList.add("pais");
                    contenedorPaises.appendChild(div);
                });
            }

            for (const continente in data) {
                let paises = data[continente].filter(p =>
                    !p.origen && !p.visitado
                );

                if (paises.length === 0) continue;

                const h2 = document.createElement("h2");
                h2.textContent = continente;
                contenedorPaises.appendChild(h2);

                paises.forEach(pais => {
                    const div = document.createElement("div");
                    const p = document.createElement("p");

                    p.textContent = pais.nombre;
                    div.appendChild(p);

                    const button = document.createElement("button");
                    button.textContent = "Visitado";
                    button.classList.add("boton");
                    div.appendChild(button);

                    div.style.backgroundImage = `url(img/${pais.iso.toLowerCase()}.png)`;
                    div.classList.add("pais");
                    contenedorPaises.appendChild(div);
                });
            }
        };

        mostrarPaisesPorContinente(data);

        inputBuscar.addEventListener("input", function() {
            const busqueda = inputBuscar.value.trim().toLowerCase();

            if (busqueda === "") {
                mostrarPaisesPorContinente(data);
                return;
            }

            const continenteEncontrado = Object.keys(data).find(continente => 
                continente.toLowerCase().startsWith(busqueda)
            );

            if (continenteEncontrado) {
                const resultado = {};
                resultado[continenteEncontrado] = data[continenteEncontrado];
                mostrarPaisesPorContinente(resultado);
            } else {
                const paisesFiltrados = Object.values(data)
                    .flat()
                    .filter(pais => pais.nombre.toLowerCase().startsWith(busqueda));

                mostrarPaisesPorContinente({ "": paisesFiltrados });
            }
        });

        contenedorPaises.addEventListener("click", function(event) {
            const target = event.target;

            if (target && target.classList.contains("boton")) {
                const paisNombre = target.parentElement.querySelector("p").textContent;

                for (const continente in data) {
                    const pais = data[continente].find(p => p.nombre === paisNombre);
                    if (pais) {
                        pais.visitado = true;
                        break;
                    }
                }

                mostrarPaisesPorContinente(data);
            }
        });
    })
    .catch(error => console.log("Error al cargar JSON", error));