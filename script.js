// ----- DATE SETUP -----
const today = new Date();

// 🎄 Christmas redirect
const christmas = new Date(today.getFullYear(), 11, 25);
if (today >= christmas) {
    window.location.href = "letter.html";
}

// ----- UNLOCK DATES FOR 7 STAGES -----
// Months in JS are 0-indexed: 11 = December
const stage1Date = new Date(today.getFullYear(), 11, 1);   // Dec 1
const stage2Date = new Date(today.getFullYear(), 11, 3);   // Dec 3 (6 months!)
const stage3Date = new Date(today.getFullYear(), 11, 9);   // Dec 9
const stage4Date = new Date(today.getFullYear(), 11, 13);  // Dec 13
const stage5Date = new Date(today.getFullYear(), 11, 17);  // Dec 17
const stage6Date = new Date(today.getFullYear(), 11, 21);  // Dec 21
const stage7Date = new Date(today.getFullYear(), 11, 24);  // Dec 24

let stage = 0;

// ----- DETERMINE CURRENT STAGE -----
if (today < stage1Date) stage = 0;
else if (today < stage2Date) stage = 1;
else if (today < stage3Date) stage = 2;
else if (today < stage4Date) stage = 3;
else if (today < stage5Date) stage = 4;
else if (today < stage6Date) stage = 5;
else if (today < stage7Date) stage = 6;
else stage = 6; // Still stage 6 until Christmas redirect

// ----- NEXT STAGE DATE -----
let nextStageDate = null;

if (stage === 0) nextStageDate = stage1Date;
else if (stage === 1) nextStageDate = stage2Date;
else if (stage === 2) nextStageDate = stage3Date;
else if (stage === 3) nextStageDate = stage4Date;
else if (stage === 4) nextStageDate = stage5Date;
else if (stage === 5) nextStageDate = stage6Date;
else if (stage === 6) nextStageDate = christmas;

// ----- DOM REFERENCES -----
const countdownTitle = document.getElementById("countdown-title");
const countdownValue = document.getElementById("countdown-value");
const toggleBtn = document.getElementById("toggle-btn");

let showingChristmas = false;

// ----- PLANT STAGE DATA -----
const stages = [
    { img: "assets/stage0.png", text: "Everything meaningful starts small." },
    { img: "assets/stage1.png", text: "A tiny beginning — just like us." },
    { img: "assets/stage2.png", text: "Happy 6 Months!!" },
    { img: "assets/stage3.png", text: "You make my days feel lighter and warmer." },
    { img: "assets/stage4.png", text: "I love the small moments we share." },
    { img: "assets/stage5.png", text: "Something beautiful is forming." },
    { img: "assets/stage6.png", text: "Your flower is almost ready to bloom." }
];

// ----- RENDER PLANT & MESSAGE -----
const plantImage = document.getElementById("plant-image");
const message = document.getElementById("message");

plantImage.src = stages[stage].img;
message.innerText = stages[stage].text;

// ----- COUNTDOWN FUNCTIONS -----
function formatCountdown(target) {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) return "Soon...";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    return `${days}d ${hours}h ${mins}m`;
}

function updateCountdownDisplay() {
    if (showingChristmas) {
        countdownTitle.innerText = "Countdown → Christmas 🎄";
        countdownValue.innerText = formatCountdown(christmas);
        toggleBtn.innerText = "Switch to Next Growth 🌱";
    } else {
        countdownTitle.innerText = "Countdown → Next Growth 🌱";
        countdownValue.innerText = formatCountdown(nextStageDate);
        toggleBtn.innerText = "Switch to Christmas 🎄";
    }
}

// toggle
toggleBtn.addEventListener("click", () => {
    showingChristmas = !showingChristmas;
    updateCountdownDisplay();
});

// auto-refresh every minute
updateCountdownDisplay();
setInterval(updateCountdownDisplay, 60000);

// ----- SPARKLES -----
function sparkle() {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = "100vh";
    s.style.animationDuration = (6 + Math.random() * 4) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 10000);
}
setInterval(sparkle, 500);

// ----- PARTICLES -----
function particle() {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = "-10vh";
    p.style.animationDuration = (12 + Math.random() * 10) + "s";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 20000);
}
setInterval(particle, 1500);

// ----- PARALLAX DEPTH -----
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;

    const scenery = document.querySelector(".bg-scenery");
    const glow = document.querySelector(".glow");

    scenery.style.transform = `translate(${x}px, ${y}px)`;
    glow.style.transform = `translate(calc(-50% + ${x/3}px), calc(-50% + ${y/3}px))`;
});
