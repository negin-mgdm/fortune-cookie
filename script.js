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
