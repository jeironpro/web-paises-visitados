const paises = [
    {
        "África": [
            { "nombre": "Angola", "iso": "AO" },
            { "nombre": "Argelia", "iso": "DZ" },
            { "nombre": "Benín", "iso": "BJ" },
            { "nombre": "Botsuana", "iso": "BW" },
            { "nombre": "Burkina Faso", "iso": "BF" },
            { "nombre": "Burundi", "iso": "BI" },
            { "nombre": "Cabo Verde", "iso": "CV" },
            { "nombre": "Camerún", "iso": "CM" },
            { "nombre": "Chad", "iso": "TD" },
            { "nombre": "Comoras", "iso": "KM" },
            { "nombre": "Congo", "iso": "CG" },
            { "nombre": "República Democrática del Congo", "iso": "CD" },
            { "nombre": "Costa de Marfil", "iso": "CI" },
            { "nombre": "Egipto", "iso": "EG" },
            { "nombre": "Eritrea", "iso": "ER" },
            { "nombre": "Esuatini", "iso": "SZ" },
            { "nombre": "Etiopía", "iso": "ET" },
            { "nombre": "Gabón", "iso": "GA" },
            { "nombre": "Gambia", "iso": "GM" },
            { "nombre": "Ghana", "iso": "GH" },
            { "nombre": "Guinea", "iso": "GN" },
            { "nombre": "Guinea-Bisáu", "iso": "GW" },
            { "nombre": "Guinea Ecuatorial", "iso": "GQ" },
            { "nombre": "Kenia", "iso": "KE" },
            { "nombre": "Lesoto", "iso": "LS" },
            { "nombre": "Liberia", "iso": "LR" },
            { "nombre": "Libia", "iso": "LY" },
            { "nombre": "Madagascar", "iso": "MG" },
            { "nombre": "Malawi", "iso": "MW" },
            { "nombre": "Malí", "iso": "ML" },
            { "nombre": "Marruecos", "iso": "MA" },
            { "nombre": "Mauricio", "iso": "MU" },
            { "nombre": "Mauritania", "iso": "MR" },
            { "nombre": "Mozambique", "iso": "MZ" },
            { "nombre": "Namibia", "iso": "NA" },
            { "nombre": "Níger", "iso": "NE" },
            { "nombre": "Nigeria", "iso": "NG" },
            { "nombre": "Ruanda", "iso": "RW" },
            { "nombre": "Santo Tomé y Príncipe", "iso": "ST" },
            { "nombre": "Senegal", "iso": "SN" },
            { "nombre": "Seychelles", "iso": "SC" },
            { "nombre": "Sierra Leona", "iso": "SL" },
            { "nombre": "Somalia", "iso": "SO" },
            { "nombre": "Sudáfrica", "iso": "ZA" },
            { "nombre": "Sudán", "iso": "SD" },
            { "nombre": "Sudán del Sur", "iso": "SS" },
            { "nombre": "Tanzania", "iso": "TZ" },
            { "nombre": "Togo", "iso": "TG" },
            { "nombre": "Túnez", "iso": "TN" },
            { "nombre": "Uganda", "iso": "UG" },
            { "nombre": "Yibuti", "iso": "DJ" },
            { "nombre": "Zambia", "iso": "ZM" },
            { "nombre": "Zimbabue", "iso": "ZW" }
        ],
        "Asia": [
            { "nombre": "Afganistán", "iso": "AF" },
            { "nombre": "Arabia Saudita", "iso": "SA" },
            { "nombre": "Armenia", "iso": "AM" },
            { "nombre": "Azerbaiyán", "iso": "AZ" },
            { "nombre": "Bahréin", "iso": "BH" },
            { "nombre": "Bangladés", "iso": "BD" },
            { "nombre": "Birmania", "iso": "MM" },
            { "nombre": "Brunéi", "iso": "BN" },
            { "nombre": "Bután", "iso": "BT" },
            { "nombre": "Camboya", "iso": "KH" },
            { "nombre": "Catar", "iso": "QA" },
            { "nombre": "China", "iso": "CN" },
            { "nombre": "Chipre", "iso": "CY" },
            { "nombre": "Corea del Norte", "iso": "KP" },
            { "nombre": "Corea del Sur", "iso": "KR" },
            { "nombre": "Emiratos Árabes Unidos", "iso": "AE" },
            { "nombre": "Filipinas", "iso": "PH" },
            { "nombre": "Georgia", "iso": "GE" },
            { "nombre": "India", "iso": "IN" },
            { "nombre": "Indonesia", "iso": "ID" },
            { "nombre": "Irak", "iso": "IQ" },
            { "nombre": "Irán", "iso": "IR" },
            { "nombre": "Israel", "iso": "IL" },
            { "nombre": "Japón", "iso": "JP" },
            { "nombre": "Jordania", "iso": "JO" },
            { "nombre": "Kazajistán", "iso": "KZ" },
            { "nombre": "Kirguistán", "iso": "KG" },
            { "nombre": "Kuwait", "iso": "KW" },
            { "nombre": "Laos", "iso": "LA" },
            { "nombre": "Líbano", "iso": "LB" },
            { "nombre": "Malasia", "iso": "MY" },
            { "nombre": "Maldivas", "iso": "MV" },
            { "nombre": "Mongolia", "iso": "MN" },
            { "nombre": "Nepal", "iso": "NP" },
            { "nombre": "Omán", "iso": "OM" },
            { "nombre": "Pakistán", "iso": "PK" },
            { "nombre": "Palestina", "iso": "PS" },
            { "nombre": "Rusia", "iso": "RU" },
            { "nombre": "Singapur", "iso": "SG" },
            { "nombre": "Siria", "iso": "SY" },
            { "nombre": "Sri Lanka", "iso": "LK" },
            { "nombre": "Tayikistán", "iso": "TJ" },
            { "nombre": "Tailandia", "iso": "TH" },
            { "nombre": "Timor Oriental", "iso": "TL" },
            { "nombre": "Turquía", "iso": "TR" },
            { "nombre": "Turkmenistán", "iso": "TM" },
            { "nombre": "Uzbekistán", "iso": "UZ" },
            { "nombre": "Vietnam", "iso": "VN" },
            { "nombre": "Yemen", "iso": "YE" }
        ],
        "Europa": [
            { "nombre": "Albania", "iso": "AL" },
            { "nombre": "Alemania", "iso": "DE" },
            { "nombre": "Andorra", "iso": "AD" },
            { "nombre": "Armenia", "iso": "AM" },
            { "nombre": "Austria", "iso": "AT" },
            { "nombre": "Azerbaiyán", "iso": "AZ" },
            { "nombre": "Bélgica", "iso": "BE" },
            { "nombre": "Bielorrusia", "iso": "BY" },
            { "nombre": "Bosnia y Herzegovina", "iso": "BA" },
            { "nombre": "Bulgaria", "iso": "BG" },
            { "nombre": "Chipre", "iso": "CY" },
            { "nombre": "Croacia", "iso": "HR" },
            { "nombre": "Dinamarca", "iso": "DK" },
            { "nombre": "Eslovaquia", "iso": "SK" },
            { "nombre": "Eslovenia", "iso": "SI" },
            { "nombre": "España", "iso": "ES" },
            { "nombre": "Estonia", "iso": "EE" },
            { "nombre": "Finlandia", "iso": "FI" },
            { "nombre": "Francia", "iso": "FR" },
            { "nombre": "Georgia", "iso": "GE" },
            { "nombre": "Grecia", "iso": "GR" },
            { "nombre": "Hungría", "iso": "HU" },
            { "nombre": "Irlanda", "iso": "IE" },
            { "nombre": "Islandia", "iso": "IS" },
            { "nombre": "Italia", "iso": "IT" },
            { "nombre": "Kazajistán", "iso": "KZ" },
            { "nombre": "Kosovo", "iso": "XK" },
            { "nombre": "Letonia", "iso": "LV" },
            { "nombre": "Liechtenstein", "iso": "LI" },
            { "nombre": "Lituania", "iso": "LT" },
            { "nombre": "Luxemburgo", "iso": "LU" },
            { "nombre": "Macedonia del Norte", "iso": "MK" },
            { "nombre": "Malta", "iso": "MT" },
            { "nombre": "Moldavia", "iso": "MD" },
            { "nombre": "Mónaco", "iso": "MC" },
            { "nombre": "Montenegro", "iso": "ME" },
            { "nombre": "Noruega", "iso": "NO" },
            { "nombre": "Países Bajos", "iso": "NL" },
            { "nombre": "Polonia", "iso": "PL" },
            { "nombre": "Portugal", "iso": "PT" },
            { "nombre": "Reino Unido", "iso": "GB" },
            { "nombre": "República Checa", "iso": "CZ" },
            { "nombre": "Rumanía", "iso": "RO" },
            { "nombre": "Rusia", "iso": "RU" },
            { "nombre": "San Marino", "iso": "SM" },
            { "nombre": "Serbia", "iso": "RS" },
            { "nombre": "Suecia", "iso": "SE" },
            { "nombre": "Suiza", "iso": "CH" },
            { "nombre": "Turquía", "iso": "TR" },
            { "nombre": "Ucrania", "iso": "UA" },
            { "nombre": "Ciudad del Vaticano", "iso": "VA" }
        ],
        "América": [
            { "nombre": "Antigua y Barbuda", "iso": "AG" },
            { "nombre": "Argentina", "iso": "AR" },
            { "nombre": "Bahamas", "iso": "BS" },
            { "nombre": "Barbados", "iso": "BB" },
            { "nombre": "Belice", "iso": "BZ" },
            { "nombre": "Bolivia", "iso": "BO" },
            { "nombre": "Brasil", "iso": "BR" },
            { "nombre": "Canadá", "iso": "CA" },
            { "nombre": "Chile", "iso": "CL" },
            { "nombre": "Colombia", "iso": "CO" },
            { "nombre": "Costa Rica", "iso": "CR" },
            { "nombre": "Cuba", "iso": "CU" },
            { "nombre": "Dominica", "iso": "DM" },
            { "nombre": "Ecuador", "iso": "EC" },
            { "nombre": "El Salvador", "iso": "SV" },
            { "nombre": "Estados Unidos", "iso": "US" },
            { "nombre": "Granada", "iso": "GD" },
            { "nombre": "Guatemala", "iso": "GT" },
            { "nombre": "Guyana", "iso": "GY" },
            { "nombre": "Haití", "iso": "HT" },
            { "nombre": "Honduras", "iso": "HN" },
            { "nombre": "Jamaica", "iso": "JM" },
            { "nombre": "México", "iso": "MX" },
            { "nombre": "Nicaragua", "iso": "NI" },
            { "nombre": "Panamá", "iso": "PA" },
            { "nombre": "Paraguay", "iso": "PY" },
            { "nombre": "Perú", "iso": "PE" },
            { "nombre": "República Dominicana", "iso": "DO" },
            { "nombre": "San Cristóbal y Nieves", "iso": "KN" },
            { "nombre": "Santa Lucía", "iso": "LC" },
            { "nombre": "San Vicente y las Granadinas", "iso": "VC" },
            { "nombre": "Surinam", "iso": "SR" },
            { "nombre": "Trinidad y Tobago", "iso": "TT" },
            { "nombre": "Uruguay", "iso": "UY" },
            { "nombre": "Venezuela", "iso": "VE" }
        ],
        "Oceanía": [
            { "nombre": "Australia", "iso": "AU" },
            { "nombre": "Fiyi", "iso": "FJ" },
            { "nombre": "Islas Marshall", "iso": "MH" },
            { "nombre": "Islas Salomón", "iso": "SB" },
            { "nombre": "Kiribati", "iso": "KI" },
            { "nombre": "Micronesia", "iso": "FM" },
            { "nombre": "Nauru", "iso": "NR" },
            { "nombre": "Nueva Zelanda", "iso": "NZ" },
            { "nombre": "Palaos", "iso": "PW" },
            { "nombre": "Papúa Nueva Guinea", "iso": "PG" },
            { "nombre": "Samoa", "iso": "WS" },
            { "nombre": "Tonga", "iso": "TO" },
            { "nombre": "Tuvalu", "iso": "TV" },
            { "nombre": "Vanuatu", "iso": "VU" }
        ]
    }
]

const obtenerVisitados = () => {
    return JSON.parse(localStorage.getItem("paisesVisitados")) || [];
};

const guardarVisitados = (visitados) => {
    localStorage.setItem("paisesVisitados", JSON.stringify(visitados));
};

paises.forEach(data => {
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

    const visitadosGuardados = obtenerVisitados();
    for (const continente in data) {
        data[continente].forEach(pais => {
            if (visitadosGuardados.includes(pais.iso.toLowerCase())) {
                pais.visitado = true;
            }
        });
    }

    mostrarPaisesPorContinente(data);

    inputBuscar.addEventListener("input", function () {
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

    contenedorPaises.addEventListener("click", function (event) {
        const target = event.target;

        if (target && target.classList.contains("boton")) {
            const paisNombre = target.parentElement.querySelector("p").textContent;
            let isoPais = null;

            for (const continente in data) {
                const pais = data[continente].find(p => p.nombre === paisNombre);
                if (pais) {
                    pais.visitado = true;
                    isoPais = pais.iso.toLowerCase();
                    break;
                }
            }

            if (isoPais) {
                const visitados = obtenerVisitados();
                if (!visitados.includes(isoPais)) {
                    visitados.push(isoPais);
                    guardarVisitados(visitados);
                }
            }

            mostrarPaisesPorContinente(data);
        }
    });
})