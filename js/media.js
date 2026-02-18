document.addEventListener("DOMContentLoaded", () => {
  const ORIGIN = window.location.origin;

  // 1) Poner el hint UNA sola vez (en la sección MEDIA), no por cada video
  const mediaSection = document.querySelector('[data-section="media"]');
  const hint = mediaSection?.querySelector(".media-hint[data-i18n='mediaHint']");
  if (!hint) {
    const family = mediaSection?.querySelector(".family");
    if (family) {
      const p = document.createElement("p");
      p.className = "media-hint";
      p.setAttribute("data-i18n", "mediaHint");
      family.insertAdjacentElement("afterend", p);
    }
  }

  // 2) Render de cada video
  document.querySelectorAll(".media-item[data-youtube-id]").forEach((item) => {
    const id = item.dataset.youtubeId?.trim();
    if (!id) return;

    item.innerHTML = `
      <div class="embed">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&origin=${encodeURIComponent(ORIGIN)}"
          title="YouTube video"
          loading="lazy"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>

      <a class="card-link"
         href="https://youtu.be/${id}"
         target="_blank"
         rel="noopener noreferrer">
        Ver en YouTube
      </a>
    `;
  });
});