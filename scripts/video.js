// ==================== VIDEO CARD CLICK HANDLER ====================
document.querySelectorAll('.video-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    console.log(`🎬 Video card clicked at index: ${index}`);

    // Collect all video data from cards
    const videos = Array.from(document.querySelectorAll('.video-card')).map((c, i) => ({
      video: c.getAttribute('data-video') || null,
      title: c.getAttribute('data-title') || `Untitled Video ${i + 1}`,
      channel: c.getAttribute('data-channel') || "Unknown Channel",
      thumb: c.getAttribute('data-thumb') || "../images/placeholder.jpg"
    }));

    console.log("📦 Full video list collected:", videos);

    // Save to localStorage
    localStorage.setItem('videos', JSON.stringify(videos));
    localStorage.setItem('currentVideo', index);
    console.log(`💾 Saved currentVideo index ${index} and video list to localStorage`);

    // Update watch history
    let history = JSON.parse(localStorage.getItem("watchHistory")) || [];
    history.unshift(videos[index]); 
    localStorage.setItem("watchHistory", JSON.stringify(history));
    console.log("🕒 Updated watch history:", history);

    // Redirect to video page
    window.location.href = "../pages/video.html";
  });
});


// ==================== VIDEO PAGE LOGIC ====================
(function loadVideoPage() {
  if (!document.querySelector('.video-player')) {
    console.log("⚠️ Not on video page, skipping video load logic.");
    return;
  }

  console.log("📺 On video page. Loading current video...");

  const videos = JSON.parse(localStorage.getItem('videos')) || [];
  const currentIndex = parseInt(localStorage.getItem('currentVideo'), 10);

  if (!videos.length || isNaN(currentIndex)) {
    console.warn("⚠️ No videos found in localStorage. Showing placeholder content.");
    document.querySelector('.video-player h2').textContent = "No video available";
    document.querySelector('.channel-info span').textContent = "Unknown Channel";
    document.querySelector('.channel-info img').src = "../images/placeholder.jpg";
    return;
  }

  const current = videos[currentIndex];
  console.log("▶️ Current video object:", current);

  // Video player section
  const videoEl = document.querySelector('.video-player video source');
  if (videoEl && current.video) {
    videoEl.src = `../videos/${current.video}`;
    videoEl.parentElement.load();
    console.log(`🎥 Set video source to: ../videos/${current.video}`);
  } else {
    console.warn("⚠️ No video file found, showing placeholder.");
    if (document.querySelector('.video-player video')) {
      document.querySelector('.video-player video').replaceWith("❌ No video file available.");
    }
  }

  // Title
  document.querySelector('.video-player h2').textContent = current.title || "Untitled Video";

  // Channel info
  document.querySelector('.channel-info span').textContent = current.channel || "Unknown Channel";
  document.querySelector('.channel-info img').src = current.thumb || "../images/placeholder.jpg";

  // Suggested videos
  const suggestedContainer = document.querySelector('.suggested-videos');
  suggestedContainer.innerHTML = "";
  console.log("📋 Building suggested videos list...");

  videos.forEach((vid, idx) => {
    if (idx !== currentIndex) {
      const card = document.createElement('div');
      card.classList.add('suggested-card');
      card.innerHTML = `
        <img src="${vid.thumb || '../images/placeholder.jpg'}" alt="${vid.title || 'Untitled'}">
        <div>
          <h4>${vid.title || 'Untitled'}</h4>
          <p>${vid.channel || 'Unknown Channel'}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        console.log(`➡️ Switching to suggested video at index ${idx}:`, vid);
        localStorage.setItem('currentVideo', idx);
        window.location.href = "video.html";
      });

      suggestedContainer.appendChild(card);
    }
  });

  console.log("✅ Suggested videos loaded.");
})();
