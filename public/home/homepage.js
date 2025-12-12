const video = document.getElementById("introVideo");
const lead = document.getElementById("lead");

// 1. Leaderboard Navigation
if (lead) {
    lead.addEventListener("click", () => {
        window.location.href = "/leaderboard";
    });
}

// 2. Video Logic
if (video) {
    video.playbackRate = 2.0;

    video.addEventListener('ended', () => {
        // Redirects immediately when video ends
        window.location.href = "/spaceship/home";
    });
}