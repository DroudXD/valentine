(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Sham wth?",
    "Nah you gotta be joking hbb",
    "You're breaking my heart :(",
    "habibti please...",
    "SHAM!!",
    "If you say no again, I will be really sad...",
    "Very sad.",
    "Sham I said I'll be very very very sad.",
    "No. I will never stop asking..."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const introText = document.getElementById("introText");
    const mainContent = document.getElementById("mainContent");

    if (!introText || !mainContent) return;

    const introMessages = [
        "Hello Sham",
        "I want to ask you something super important cutie",
        "Will you be my Valentine?"
    ];

    let currentMessage = 0;

    function typeMessage(text, done) {
        let i = 0;
        introText.textContent = "";

        function typing() {
            if (i < text.length) {
                introText.textContent += text[i];
                i++;
                setTimeout(typing, 60);
            } else {
                animateDots(text, done);
            }
        }

        typing();
    }

function animateDots(baseText, done) {
    let dots = 0;
    let cycles = 0;

    const interval = setInterval(() => {

        introText.textContent = baseText + (dots === 0 ? "" : ".".repeat(dots));

        dots++;

        if (dots > 3) {
            dots = 0;
            cycles++;
        }

        if (cycles === 3) {   // how long it loops
            clearInterval(interval);
            setTimeout(done, 450);
        }

    }, 400); // slower = more iMessage feel
}


    function nextMessage() {
        if (currentMessage >= introMessages.length) {
            mainContent.classList.add("visible");
            return;
        }

        typeMessage(introMessages[currentMessage], () => {
            currentMessage++;
            setTimeout(nextMessage, 600);
        });
    }

    nextMessage();
});
