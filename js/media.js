document.addEventListener("DOMContentLoaded", () => {
  const ORIGIN = window.location.origin;
  const mediaItems = document.querySelectorAll(".media-item");

  mediaItems.forEach(item => {
    const id = item.dataset.youtubeId;
    if (!id) return;

    item.innerHTML = `
      <div class="block">
        <p class="media-hint" data-i18n="mediaHint"></p>

        <div class="media-grid">
          <div class="embed">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&origin=${encodeURIComponent(ORIGIN)}"
              title="YouTube video"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              frameborder="0"
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
        </div>
      </div>
    `;
  });
});