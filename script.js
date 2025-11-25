// ----- DATE SETUP -----
const today = new Date();

// ----- CHRISTMAS DATE -----
const christmas = new Date(today.getFullYear(), 11, 25);

// ----- UNLOCK DATES FOR 7 STAGES -----
const stage1Date = new Date(today.getFullYear(), 11, 1);
const stage2Date = new Date(today.getFullYear(), 11, 3);
const stage3Date = new Date(today.getFullYear(), 11, 9);
const stage4Date = new Date(today.getFullYear(), 11, 13);
const stage5Date = new Date(today.getFullYear(), 11, 17);
const stage6Date = new Date(today.getFullYear(), 11, 25);

let stage = 0;

// ----- DETERMINE CURRENT STAGE -----
if (today < stage1Date) stage = 0;
else if (today < stage2Date) stage = 1;
else if (today < stage3Date) stage = 2;
else if (today < stage4Date) stage = 3;
else if (today < stage5Date) stage = 4;
else if (today < stage6Date) stage = 5;
else stage = 6;

// ----- NEXT STAGE DATE -----
let nextStageDate = null;
if (stage === 0) nextStageDate = stage1Date;
else if (stage === 1) nextStageDate = stage2Date;
else if (stage === 2) nextStageDate = stage3Date;
else if (stage === 3) nextStageDate = stage4Date;
else if (stage === 4) nextStageDate = stage5Date;
else if (stage === 5) nextStageDate = stage6Date;
else nextStageDate = christmas;

// ----- DOM REFERENCES -----
const plantImage = document.getElementById("plant-image");
const message = document.getElementById("message");
const countdownTitle = document.getElementById("countdown-title");
const countdownValue = document.getElementById("countdown-value");
const toggleBtn = document.getElementById("toggle-btn");
const christmasBtn = document.getElementById("christmas-btn");

let showingChristmas = false;

// ----- PLANT STAGES -----
const stages = [
    {
    img: "assets/stage0.png",
    text: `Every story begins with a tiny seed…

    I made this little garden for you, something that grows a little each week until Christmas. 
    
    Open it whenever you want, and you’ll see your little seed change slowly, a countdown made just for you.
        `
    },
    { img: "assets/stage1.png", text: "A tiny beginning — just like us." },
    { img: "assets/stage2.png", text: "Happy six months!! It's been the best and sweetest six months of my life. I’m really happy I've got to spend it with you" },
    { img: "assets/stage3.png", text: "You make my days feel lighter and warmer." },
    { img: "assets/stage4.png", text: "I love the small moments we share." },
    { img: "assets/stage5.png", text: "Something beautiful is forming." },
    { img: "assets/stage6.png", text: "Your flower is almost ready to bloom." }
];

// ----- RENDER PLANT AND MESSAGE -----
plantImage.src = stages[stage].img;
message.innerText = stages[stage].text;

// ----- CHRISTMAS SPECIAL -----
const isChristmas = today.getMonth() === 11 && today.getDate() === 25;

if (isChristmas) {
    plantImage.src = "assets/stage6.png";
    message.innerText = "Merry Christmas, love.";
    document.getElementById("countdown-box").style.display = "none";
    christmasBtn.style.display = "block";

    christmasBtn.addEventListener("click", () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "letter.html";
        }, 2000);
    });
}

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

toggleBtn.addEventListener("click", () => {
    showingChristmas = !showingChristmas;
    updateCountdownDisplay();
});

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

// ----- SNOWFLAKES -----
function createSnowflake() {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.textContent = "❄";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (4 + Math.random() * 4) + "s";
    snow.style.fontSize = (10 + Math.random() * 10) + "px";
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 8000);
}
setInterval(createSnowflake, 150);
