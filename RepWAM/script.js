function initVideoCarousel() {
  const carousel = document.querySelector("#real-robot-carousel");
  const mainVideo = document.querySelector("#real-robot-main-video");
  const title = document.querySelector("#real-robot-main-title");
  if (!carousel || !mainVideo) return;

  const thumbs = Array.from(carousel.querySelectorAll(".sidebar-thumb"));
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      if (thumb.classList.contains("active")) return;

      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");

      const source = mainVideo.querySelector("source");
      const videoSrc = thumb.dataset.videoSrc;
      if (source && videoSrc) source.src = videoSrc;
      if (title && thumb.dataset.mainTitle) title.textContent = thumb.dataset.mainTitle;

      mainVideo.load();
      mainVideo.muted = true;
      mainVideo.play().catch(() => {});
    });
  });
}

document.addEventListener("DOMContentLoaded", initVideoCarousel);