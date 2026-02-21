document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("buyModal");
  const productEl = document.getElementById("buyProduct");
  const goShop = document.getElementById("goShop");
  const chkFree = document.getElementById("chkFree");
  const chkReq  = document.getElementById("chkReq");

  let lastFocus = null;

  const isOpen = () => modal.classList.contains("is-open");

  const resetModal = () => {
    chkFree.checked = false;
    chkReq.checked = false;
    goShop.classList.add("is-disabled");
    goShop.setAttribute("aria-disabled", "true");
    goShop.setAttribute("href", "#");
  };

  const updateCTA = () => {
    const ok = chkFree.checked && chkReq.checked;
    if (ok) {
      goShop.classList.remove("is-disabled");
      goShop.setAttribute("aria-disabled", "false");
    } else {
      goShop.classList.add("is-disabled");
      goShop.setAttribute("aria-disabled", "true");
    }
  };

  const openModal = ({ url, name }) => {
    lastFocus = document.activeElement;

    productEl.textContent = name || "AMATISTA";
    goShop.dataset.url = url;

    resetModal();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // foco al close para accesibilidad
    const closeBtn = modal.querySelector(".modal__close");
    closeBtn && closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    resetModal();

    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  // Delegación: cualquier link con .js-buy abre el modal
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.js-buy");
    if (!a) return;

    e.preventDefault();
    const url = a.dataset.shopUrl;
    const name = a.dataset.productName || a.textContent?.trim() || "AMATISTA";
    if (!url) return;

    openModal({ url, name });
  });

  // Cerrar modal por overlay o botones con data-modal-close
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-modal-close]")) closeModal();
  });

  // Esc para cerrar
  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") closeModal();
  });

  // Habilitar CTA si ambos checks ok
  chkFree.addEventListener("change", updateCTA);
  chkReq.addEventListener("change", updateCTA);

  // En el click del CTA, si está habilitado, recién ahí setea href real
  goShop.addEventListener("click", (e) => {
    const ok = chkFree.checked && chkReq.checked;
    if (!ok) {
      e.preventDefault();
      return;
    }
    const url = goShop.dataset.url;
    if (!url) {
      e.preventDefault();
      return;
    }
    // seteo final del href para evitar “copiar link” antes de aceptar
    goShop.setAttribute("href", url);
    // opcional: cerrar modal después de click
    closeModal();
  });
});