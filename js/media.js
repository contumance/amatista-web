document.addEventListener("DOMContentLoaded", () => {
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
              src="https://www.youtube-nocookie.com/embed/${id}"
              title="YouTube video"
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