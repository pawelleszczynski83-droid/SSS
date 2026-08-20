(function () {
  "use strict";

  // ---------- SVG badge template ----------
  function badgeSVG(id) {
    return `
    <svg class="badge-svg" viewBox="0 0 380 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Podgląd odznaki Straży Miejskiej">
      <defs>
        <linearGradient id="gold-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4e2a1"/>
          <stop offset="30%" stop-color="#d8b256"/>
          <stop offset="55%" stop-color="#f6e6ab"/>
          <stop offset="78%" stop-color="#b8863a"/>
          <stop offset="100%" stop-color="#e9cd82"/>
        </linearGradient>
        <linearGradient id="goldEdge-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff6d8"/>
          <stop offset="100%" stop-color="#9c7024"/>
        </linearGradient>
        <radialGradient id="sheen-${id}" cx="35%" cy="18%" r="80%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.5"/>
          <stop offset="35%" stop-color="#ffffff" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
        <filter id="softShadow-${id}" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.35"/>
        </filter>
      </defs>

      <g filter="url(#softShadow-${id})">
        <path d="M190 96
                 C 96 96, 40 118, 32 190
                 C 22 270, 26 350, 58 410
                 C 84 458, 130 486, 190 486
                 C 250 486, 296 458, 322 410
                 C 354 350, 358 270, 348 190
                 C 340 118, 284 96, 190 96 Z"
          fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="4"/>
        <path d="M190 112
                 C 108 112, 56 132, 48 194
                 C 39 268, 43 342, 72 396
                 C 96 439, 136 468, 190 468
                 C 244 468, 284 439, 308 396
                 C 337 342, 341 268, 332 194
                 C 324 132, 272 112, 190 112 Z"
          fill="none" stroke="#8a6423" stroke-width="1.5" stroke-opacity="0.5"/>

        <path d="M18 118 L60 88 L86 122 L58 156 Z" fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="3"/>
        <path d="M362 118 L320 88 L294 122 L322 156 Z" fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="3"/>
        <path d="M56 100
                 C 100 72, 150 60, 190 60
                 C 230 60, 280 72, 324 100
                 L 300 132
                 C 264 110, 226 100, 190 100
                 C 154 100, 116 110, 80 132
                 Z"
          fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="3"/>
        <text class="engrave num-text js-number" x="190" y="98" text-anchor="middle">987</text>

        <g class="engrave">
          <g transform="translate(190,282)">
            <g class="js-wing-left"></g>
            <g class="js-wing-right"></g>

            <path d="M0 112 L-26 158 L-13 161 L0 168 L13 161 L26 158 Z" fill="url(#gold-${id})" stroke="#8a6423" stroke-width="1" stroke-opacity="0.4"/>
            <path d="M0 -58 C 21 -48, 29 -8, 23 40 C 19 78, 11 104, 0 118 C -11 104, -19 78, -23 40 C -29 -8, -21 -48, 0 -58 Z" fill="url(#gold-${id})" stroke="#8a6423" stroke-width="1" stroke-opacity="0.4"/>
            <g stroke="#8a6423" stroke-opacity="0.45" stroke-width="1.1" fill="none">
              <path d="M-13 8 C -6 19, 6 19, 13 8"/>
              <path d="M-15 27 C -7 40, 7 40, 15 27"/>
              <path d="M-16 47 C -7 60, 7 60, 16 47"/>
              <path d="M-15 67 C -7 80, 7 80, 15 67"/>
              <path d="M-12 87 C -6 98, 6 98, 12 87"/>
            </g>
            <circle cx="0" cy="-76" r="19" fill="url(#gold-${id})" stroke="#8a6423" stroke-width="1" stroke-opacity="0.4"/>
            <path d="M-3 -74 L-27 -68 L-3 -62 Z" fill="url(#gold-${id})" stroke="#8a6423" stroke-width="1" stroke-opacity="0.4"/>
            <path d="M-15 -94 L-15 -106 L-8 -98 L0 -112 L8 -98 L15 -106 L15 -94 Z" fill="url(#gold-${id})" stroke="#8a6423" stroke-width="1" stroke-opacity="0.4"/>
            <circle cx="3" cy="-78" r="1.5" fill="#6b4c18"/>
          </g>
        </g>

        <path d="M78 372
                 C 120 358, 260 358, 302 372
                 L 292 396
                 C 254 384, 126 384, 88 396
                 Z"
          fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="3"/>
        <path d="M56 366 L80 372 L84 392 L60 402 Z" fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="2"/>
        <path d="M324 366 L300 372 L296 392 L320 402 Z" fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="2"/>
        <text class="engrave label-text" x="190" y="386" text-anchor="middle">STRAŻ MIEJSKA</text>

        <path d="M84 420 L296 420 L296 456 L84 456 Z" fill="url(#gold-${id})" stroke="url(#goldEdge-${id})" stroke-width="3"/>
        <line x1="96" y1="420" x2="96" y2="456" stroke="#8a6423" stroke-width="1.5" stroke-opacity="0.5"/>
        <line x1="284" y1="420" x2="284" y2="456" stroke="#8a6423" stroke-width="1.5" stroke-opacity="0.5"/>
        <text class="engrave city-text js-city" x="190" y="444" text-anchor="middle">NAZWA MIASTA</text>

        <path class="sheen-overlay" d="M190 96
                 C 96 96, 40 118, 32 190
                 C 22 270, 26 350, 58 410
                 C 84 458, 130 486, 190 486
                 C 250 486, 296 458, 322 410
                 C 354 350, 358 270, 348 190
                 C 340 118, 284 96, 190 96 Z"
          fill="url(#sheen-${id})"/>
      </g>
    </svg>`;
  }

  document.querySelectorAll("[data-badge-instance]").forEach((el) => {
    el.innerHTML = badgeSVG(el.dataset.badgeInstance);
  });

  // ---------- Eagle wings (generated feather fan) ----------
  function polar(angleDeg, r) {
    const a = (angleDeg * Math.PI) / 180;
    return [Math.cos(a) * r, Math.sin(a) * r];
  }

  // A single tapering feather ("petal") from the shoulder toward angleDeg.
  function petal(sx, sy, angleDeg, len, hw, sign) {
    const tip = polar(angleDeg, len);
    const midOut = polar(angleDeg, len * 0.55);
    const perp = ((angleDeg + 90) * Math.PI) / 180;
    const px = Math.cos(perp) * hw;
    const py = Math.sin(perp) * hw;

    const ax = sign > 0 ? sx : -sx;
    const tipX = sign > 0 ? tip[0] + sx : -(tip[0] + sx);
    const c1x = sign > 0 ? midOut[0] + px + sx : -(midOut[0] + px + sx);
    const c2x = sign > 0 ? midOut[0] - px * 0.6 + sx : -(midOut[0] - px * 0.6 + sx);

    return [
      "M", ax, sy,
      "Q", c1x, midOut[1] + py + sy, tipX, tip[1] + sy,
      "Q", c2x, midOut[1] - py * 0.6 + sy, ax, sy,
      "Z",
    ].join(" ");
  }

  function buildWing(sign) {
    const shoulderX = 9;
    const shoulderY = -40;

    // outer flight feathers: fan from near-vertical (close to body) to just below horizontal
    const outerAngles = [-102, -86, -68, -50, -32, -16, -2, 12];
    const outerLens = [52, 78, 100, 118, 128, 122, 104, 78];
    const outerHw = 15;

    // inner covert feathers: shorter, layered closer to the body
    const innerAngles = [-96, -74, -50, -26, -4];
    const innerLens = [30, 44, 54, 50, 36];
    const innerHw = 12;

    let d = "";
    innerAngles.forEach((a, i) => {
      d += petal(shoulderX, shoulderY + 6, a, innerLens[i], innerHw, sign) + " ";
    });
    outerAngles.forEach((a, i) => {
      d += petal(shoulderX, shoulderY, a, outerLens[i], outerHw, sign) + " ";
    });
    return d;
  }

  function renderWings() {
    const dRight = buildWing(1);
    const dLeft = buildWing(-1);

    // paint wings with the gold fill of their own svg instance
    document.querySelectorAll(".badge-svg").forEach((svg) => {
      const goldId = svg.querySelector("linearGradient[id^='gold-']").id;
      const right = svg.querySelector(".js-wing-right");
      const left = svg.querySelector(".js-wing-left");
      [right, left].forEach((g, idx) => {
        const d = idx === 0 ? dRight : dLeft;
        g.innerHTML = `<path d="${d}" fill="url(#${goldId})" stroke="#8a6423" stroke-width="1" stroke-opacity="0.45"></path>`;
      });
    });
  }

  // ---------- Live text preview ----------
  const inpNumber = document.getElementById("inpNumber");
  const inpCity = document.getElementById("inpCity");

  function fitText(el, maxWidth, baseSize) {
    if (!el) return;
    el.setAttribute("font-size", baseSize);
    let size = baseSize;
    try {
      let bbox = el.getBBox();
      while (bbox.width > maxWidth && size > 10) {
        size -= 1;
        el.setAttribute("font-size", size);
        bbox = el.getBBox();
      }
    } catch (e) {
      /* getBBox can throw before layout in some browsers; ignore */
    }
  }

  function updateNumber() {
    const digits = (inpNumber.value || "").replace(/[^0-9]/g, "").slice(0, 4);
    inpNumber.value = digits;
    document.querySelectorAll(".js-number").forEach((el) => {
      el.textContent = digits || "000";
      fitText(el, 200, 40);
    });
  }

  function updateCity() {
    const value = (inpCity.value || "").toUpperCase().slice(0, 22);
    document.querySelectorAll(".js-city").forEach((el) => {
      el.textContent = value || "NAZWA MIASTA";
      fitText(el, 190, 22);
    });
  }

  if (inpNumber) inpNumber.addEventListener("input", updateNumber);
  if (inpCity) inpCity.addEventListener("input", updateCity);

  // ---------- Order form ----------
  const orderForm = document.getElementById("orderForm");
  const orderQty = document.getElementById("orderQty");
  const orderTotal = document.getElementById("orderTotal");
  const PRICE = 89;

  function formatPLN(value) {
    return value.toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " zł";
  }

  function updateTotal() {
    const qty = Math.max(1, parseInt(orderQty.value, 10) || 1);
    orderTotal.textContent = formatPLN(qty * PRICE);
  }

  if (orderQty) orderQty.addEventListener("input", updateTotal);

  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const city = document.getElementById("orderCity").value.trim();
      const number = document.getElementById("orderNumber").value.trim();
      const qty = Math.max(1, parseInt(orderQty.value, 10) || 1);
      const note = document.getElementById("orderNote").value.trim();
      const total = formatPLN(qty * PRICE);

      const subject = `Zapytanie o wycenę — odznaka Straży Miejskiej (${city || "brak miasta"})`;
      const bodyLines = [
        `Miasto / jednostka: ${city}`,
        `Numer / zakres numerów: ${number}`,
        `Ilość sztuk: ${qty}`,
        `Szacunkowa wartość: ${total}`,
        note ? `Uwagi: ${note}` : null,
      ].filter(Boolean);

      const mailto =
        "mailto:poczta@identyfikator.net" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }

  // ---------- Init ----------
  renderWings();
  updateNumber();
  updateCity();
  updateTotal();
})();
