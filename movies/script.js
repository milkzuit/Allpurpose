// Example of data that might be fetched from an API or database
const movieData = {
  title: "The Great Adventure",
  releaseDate: "February 25, 2025",
  description:
    "A thrilling tale of adventure and discovery, featuring an unlikely hero.",
  posterUrl: "https://via.placeholder.com/300x450", // Placeholder image URL
};

// Assign the movie data to the HTML elements
document.getElementById("movie-title").innerText = movieData.title;
document.getElementById(
  "release-date"
).innerText = `Release Date: ${movieData.releaseDate}`;
document.getElementById("description").innerText = movieData.description;
document.getElementById("movie-pic").src = movieData.posterUrl;

console.log("welcome to movies website :)))))");
