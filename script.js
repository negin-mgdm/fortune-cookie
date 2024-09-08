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

    // Animate the popup and then display the fortune message
    animatePopup(() => {
        animateFortuneMessage(fortune, () => {

            cookieImage.addEventListener('click', showFortune);

            setTimeout(showTryAnotherButton, 1000);
        });
    });
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

// Function to display the fortune message with animation
function animateFortuneMessage(fortune, callback) {
    const fortuneEl = document.getElementById('fortune');
    let currentText = '';
    let index = 0;

    function typeCharacter() {
        if (index < fortune.length) {
            currentText += fortune.charAt(index);
            fortuneEl.textContent = currentText;
            index++;
            setTimeout(typeCharacter, 100);
        } else {
            if (callback) callback();
        }
    }

    typeCharacter();
}

// Function to adjust the font size dynamically
function adjustFontSize(element) {
    let fontSize = 1.2;
    element.style.fontSize = `${fontSize}em`;

    while (element.scrollWidth > element.clientWidth && fontSize > 0.5) {
        fontSize -= 0.1;
        element.style.fontSize = `${fontSize}em`;
    }
}

// Function to show the "Try another!" button
function showTryAnotherButton() {
    const tryAnotherButton = document.getElementById('try-another');
    tryAnotherButton.style.display = 'block';

    tryAnotherButton.addEventListener('click', () => {

        location.reload();
    });
}

