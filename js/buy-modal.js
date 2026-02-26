// js/buy-modal.js
document.addEventListener("DOMContentLoaded", () => {
  const modal     = document.getElementById("buyModal");
  const productEl = document.getElementById("buyProduct");
  const goShop    = document.getElementById("goShop");
  const chkFree   = document.getElementById("chkFree");
  const chkReq    = document.getElementById("chkReq");

  if (!modal || !productEl || !goShop || !chkFree || !chkReq) {
    // Fail-safe: si falta algo en el DOM, no rompemos la página
    return;
  }

  let lastFocus = null;

  const isOpen = () => modal.classList.contains("is-open");

  const setCTAState = (enabled) => {
    goShop.classList.toggle("is-disabled", !enabled);
    goShop.setAttribute("aria-disabled", enabled ? "false" : "true");

    // Solo exponemos el href real cuando está habilitado (anti “copiar link”).
    if (enabled) {
      const url = goShop.dataset.url || "";
      goShop.setAttribute("href", url || "#");
    } else {
      goShop.setAttribute("href", "#");
    }
  };

  const resetModal = () => {
    chkFree.checked = false;
    chkReq.checked = false;
    setCTAState(false);
  };

  const updateCTA = () => {
    const ok = chkFree.checked && chkReq.checked && !!(goShop.dataset.url);
    setCTAState(ok);
  };

  const openModal = ({ url, name }) => {
    lastFocus = document.activeElement;

    resetModal();                 // ✅ primero reset (evita estados raros)
    productEl.textContent = name || "AMATISTA";
    goShop.dataset.url = url;     // ✅ guardamos url después del reset

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // foco al close para accesibilidad
    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
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

    const url  = a.dataset.shopUrl;
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

  // Actualizar estado CTA al tildar checks
  chkFree.addEventListener("change", updateCTA);
  chkReq.addEventListener("change", updateCTA);

  // Click del CTA: si no está habilitado, no navega.
  // ✅ Importante: NO cerramos el modal aquí, para no pisar el href en el mismo tick.
  goShop.addEventListener("click", (e) => {
    const enabled = goShop.getAttribute("aria-disabled") === "false";
    const url = goShop.getAttribute("href");

    if (!enabled || !url || url === "#") {
      e.preventDefault();
      return;
    }

    // Si querés “limpiar” el modal, hacelo luego de que el navegador ya abrió la pestaña.
    // (Esto evita el bug que te llevaba a /#)
    setTimeout(() => {
      if (isOpen()) closeModal();
    }, 250);
  });
});