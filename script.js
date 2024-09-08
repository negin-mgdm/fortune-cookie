// Array of fortune messages
const fortunes = [
    "You will have a pleasant surprise.",
    "A thrilling time is in your near future.",
    "Your talents will be recognized and rewarded.",
    "Now is the time to try something new.",
    "An unexpected event will soon bring you fortune.",
    "You will find what you seek where you least expect it.",
    "A new perspective will come with the new year.",
    "Someone is looking up to you. Don't let them down."
];

// Function to get a random fortune
function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// Function to handle the fortune cookie click event
function showFortune() {
    const cookieImage = document.getElementById('cookie');

    cookieImage.removeEventListener('click', showFortune);

    cookieImage.src = 'broken-cookie.png';

    const fortune = getFortune();
}

document.getElementById('cookie').addEventListener('click', showFortune);

// Function to animate the pop-up box
function animatePopup(callback) {
    const fortuneMessageDiv = document.querySelector('.fortune-message');
    fortuneMessageDiv.style.display = 'block';
    fortuneMessageDiv.style.width = 'auto';

    fortuneMessageDiv.style.transform = 'translate(-50%, -50%) scale(0)';

    setTimeout(() => {
        fortuneMessageDiv.style.transition = 'transform 0.5s ease-out';
        fortuneMessageDiv.style.transform = 'translate(-50%, -50%) scale(1)';
        setTimeout(() => {
            if (callback) callback();
        }, 500);
    }, 10);
}

