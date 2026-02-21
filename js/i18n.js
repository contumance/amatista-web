// Año
document.getElementById("year").textContent = new Date().getFullYear();

const langSelect = document.getElementById("langSelect");
let dict = {};

// --------------------
// Tabs / Sections
// --------------------
const TAB_STORAGE_KEY = "amatista_tab";

function setActiveTab(tabId) {
  // buttons
  document.querySelectorAll(".tab").forEach((btn) => {
    const isActive = btn.getAttribute("data-tab") === tabId;
    btn.classList.toggle("tab--active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  // sections
  document.querySelectorAll("[data-section]").forEach((sec) => {
    const isActive = sec.getAttribute("data-section") === tabId;
    sec.classList.toggle("section--active", isActive);
  });

  try { localStorage.setItem(TAB_STORAGE_KEY, tabId); } catch {}
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.setAttribute("role", "tab");
    btn.addEventListener("click", () => setActiveTab(btn.getAttribute("data-tab")));
  });

  // restore tab
  let savedTab = "core";
  try { savedTab = localStorage.getItem(TAB_STORAGE_KEY) || "core"; } catch {}
  setActiveTab(savedTab);
}

// --------------------
// i18n
// --------------------
async function loadDict(lang) {
  const res = await fetch(`i18n/${lang}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error(`No se pudo cargar i18n/${lang}.json`);
  return res.json();
}

function applyI18n(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict?.[key];
    if (typeof value === "string") el.textContent = value;
  });

  // Cierra los Info+ al cambiar idioma (opcional)
  document.querySelectorAll("details.info[open]").forEach((d) => d.removeAttribute("open"));

  // Guardar preferencia
  try { localStorage.setItem("amatista_lang", lang); } catch {}
}

async function setLang(lang) {
  try {
    dict = await loadDict(lang);
    applyI18n(lang);
  } catch (err) {
    console.error(err);
  }
}

// Preferencia guardada
let saved = "es";
try { saved = localStorage.getItem("amatista_lang") || "es"; } catch {}

langSelect.value = saved;

initTabs();
setLang(saved);

langSelect.addEventListener("change", (e) => setLang(e.target.value));
