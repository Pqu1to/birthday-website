/* =========================================
   START EXPERIENCE
========================================= */

function startExperience() {

    const loading =
        document.getElementById("loadingScreen");

    loading.classList.add("hide");

    createBackgroundHearts();

    // Try to start music
    const music =
        document.getElementById("backgroundMusic");

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });
}


/* =========================================
   SMOOTH NAVIGATION
========================================= */

function goTo(sectionID) {

    const section =
        document.getElementById(sectionID);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   GIFT
========================================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const message =
        document.getElementById("giftMessage");

    gift.classList.add("opened");

    setTimeout(() => {

        message.classList.add("show");

        createHearts();

        createConfetti(60);

    }, 600);

}


/* =========================================
   CAKE / WISH
========================================= */

function blowCandle() {

    const flame =
        document.querySelector(".flame");

    const message =
        document.getElementById("wishMessage");

    flame.classList.add("off");

    createConfetti(80);

    createHearts();

    setTimeout(() => {

        message.classList.add("show");

    }, 800);

}


/* =========================================
   LETTER
========================================= */

function openLetter() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        setTimeout(() => {

            createHearts();

        }, 500);

    }

}


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");

    if (musicPlaying) {

        music.pause();

        button.innerHTML = "🔇";

        musicPlaying = false;

    } else {

        music.play().catch(() => {});

        button.innerHTML = "🎵";

        musicPlaying = true;

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const container =
        document.getElementById("heartsContainer");

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "♡"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}


function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}


function createBackgroundHearts() {

    setInterval(() => {

        createHeart();

    }, 1200);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount = 100) {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "confetti-piece"
        );

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        const size =
            6 + Math.random() * 10;

        piece.style.width =
            size + "px";

        piece.style.height =
            size * 1.5 + "px";

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =========================================
   FINAL CELEBRATION
========================================= */

function celebrate() {

    // Massive confetti
    createConfetti(250);

    // Lots of hearts
    createHearts();

    // More hearts after a delay
    setTimeout(() => {

        createHearts();

    }, 1500);

    setTimeout(() => {

        createHearts();

    }, 3000);

}


/* =========================================
   CREATE INITIAL STARS
========================================= */

function createStars() {

    const stars =
        document.querySelector(".stars");

    for (let i = 0; i < 100; i++) {

        const star =
            document.createElement("span");

        star.style.position = "absolute";

        star.style.width =
            Math.random() * 3 + "px";

        star.style.height =
            star.style.width;

        star.style.background =
            "white";

        star.style.borderRadius =
            "50%";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.opacity =
            Math.random();

        stars.appendChild(star);

    }

}

createStars();


/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const stars =
        document.querySelector(".stars");

    if (stars) {

        stars.style.transform =
            `translateY(${scroll * 0.05}px)`;

    }

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    console.log(
        "Birthday surprise website loaded ❤️"
    );

});