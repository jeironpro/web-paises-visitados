for (let i = 0; i < 20; i++) {
    const nube = document.createElement('div');
    nube.className = 'nube';
    const scale = Math.random() * 0.5 + 0.6;
    nube.style.width = `${200 * scale}px`;
    nube.style.height = `${120 * scale}px`;
    nube.style.top = `${Math.random() * 100}vh`;
    nube.style.left = `${Math.random() * 100}vw`;
    nube.style.animationDuration = `${60 + Math.random() * 40}s`;
    document.body.appendChild(nube);
}

const avionWrapper = document.getElementById('avion-wrapper');
  const avion = document.getElementById('avion');

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let dx = Math.random() * 2 - 1;
  let dy = Math.random() * 2 - 1;

  function normalizar() {
    const mag = Math.sqrt(dx * dx + dy * dy);
    dx /= mag;
    dy /= mag;
  }
  normalizar();

  function mover() {
    const velocidad = 2.5;
    x += dx * velocidad;
    y += dy * velocidad;

    if (x < 0 || x > window.innerWidth) dx *= -1;
    if (y < 0 || y > window.innerHeight) dy *= -1;

    if (Math.random() < 0.01) {
      dx += (Math.random() - 0.5) * 0.3;
      dy += (Math.random() - 0.5) * 0.3;
      normalizar();
    }

    const angulo = Math.atan2(dy, dx) * 180 / Math.PI + 90;

    avionWrapper.style.left = `${x}px`;
    avionWrapper.style.top = `${y}px`;
    avion.style.transform = `rotate(${angulo}deg)`;

    const estela = document.createElement('div');
    estela.className = 'estela';

    // Ajustamos la posición al centro trasero del avión
    const estelaX = x - Math.cos((angulo - 90) * Math.PI / 180) * 20;
    const estelaY = y - Math.sin((angulo - 90) * Math.PI / 180) * 20;

    estela.style.left = `${estelaX - 12}px`; // 12 = ancho / 2
    estela.style.top = `${estelaY - 6}px`;   // 6 = alto / 2
    estela.style.transform = `rotate(${angulo}deg)`;
    document.body.appendChild(estela);

    setTimeout(() => estela.remove(), 2000);

    requestAnimationFrame(mover);
}

mover();