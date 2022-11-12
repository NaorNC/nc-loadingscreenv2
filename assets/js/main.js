let audioMuted = false;

function copyDiscordLink() {
  navigator.clipboard.writeText("https://discord.gg/nchub");
}

function muteAudio() {
  const btn = document.querySelector(".nchub-audio-icon");
  const vid = document.querySelector(".nchub-music");

  vid.volume = audioMuted ? 0.025 : 0;
  btn.src = `assets/img/${audioMuted ? "volume-x" : "volume-2"}.svg`;

  audioMuted = !audioMuted;
}

function main() {
  // Cursor
  window.addEventListener("mousemove", (e) => {
    const mouse = document.querySelector(".nchub-cursor");
    mouse.style.top = `${e.pageY}px`;
    mouse.style.left = `${e.pageX}px`;
  });

  // Slideshow
  document.querySelector(".nchub-slideshow").getElementsByTagName("img")[0].className = "fx";

  let images = document.querySelector(".nchub-slideshow").getElementsByTagName("img"),
    numberOfImages = images.length,
    i = 1;

  const kenBurns = () => {
    if (i == numberOfImages) {
      i = 0;
    }
    images[i].className = "fx";

    // we can't remove the class from the previous element or we'd get a bouncing effect so we clean up the one before last
    // (there must be a smarter way to do this though)
    if (i === 0) {
      images[numberOfImages - 2].className = "";
    }
    if (i === 1) {
      images[numberOfImages - 1].className = "";
    }
    if (i > 1) {
      images[i - 2].className = "";
    }
    i++;
  };

  window.setInterval(kenBurns, 7000);

  // Loader
  const loader = document.querySelector(".loading-bar-inner");
  const loaderIndicator = document.querySelector(".loading-amount");

  window.addEventListener("message", (e) => {
    if (e.data.eventName === "loadProgress") {
      const loaded = parseInt(e.data.loadFraction * 100);
      loader.style.width = `${loaded}%`;
      loaderIndicator.innerHTML = `${loaded}%`;
    }
  });

  // Video
  const vid = document.querySelector(".nchub-music");
  vid.volume = 0.025;
}

main();
