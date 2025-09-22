// account.js
document.addEventListener("DOMContentLoaded", () => {
  const historyGrid = document.getElementById("historyGrid");
  const history = JSON.parse(localStorage.getItem("watchHistory")) || [];
  console.log(history);

  if (history.length === 0) {
    console.log("No videos watched yet.");
    historyGrid.innerHTML = "<p>No videos watched yet.</p>";
    return;
  }

  history.forEach(video => {
    const card = document.createElement("div");
    card.classList.add("video-card");
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="Thumbnail">
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.channel}</p>
      </div>
    `;
    historyGrid.appendChild(card);
  });
});
