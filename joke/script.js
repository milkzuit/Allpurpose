// Array of random jokes
const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don’t eggs tell jokes? They’d crack each other up.",
  "What do you call fake spaghetti? An impasta!",
  "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
  "Why did the math book look sad? Because it had too many problems.",
  "Why don’t oysters donate to charity? Because they are shellfish.",
  "What did the grape do when it got stepped on? Nothing but let out a little wine.",
  "I used to play piano by ear, but now I use my hands.",
];

// Function to display a random joke
function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const jokeText = jokes[randomIndex];
  document.getElementById("joke-text").textContent = jokeText;
}

// Event listener for the "Get New Joke" button
document
  .getElementById("new-joke-btn")
  .addEventListener("click", getRandomJoke);
