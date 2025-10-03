// Optional: Control background music with play on first click (for iOS/Chrome restrictions)
document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
}, { once: true });
