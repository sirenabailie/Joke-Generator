// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import '../styles/main.scss';
import jokeOnDom from '../components/jokeOnDom';

const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getJokeBtn = document.querySelector('#get-joke-btn');

let jokeData = null; // Variable to store the current joke

const handleButtonClick = () => {
  if (getJokeBtn.textContent === 'Get Joke') {
    getRequest().then((joke) => {
      jokeData = joke; // Store the current joke
      jokeOnDom(joke);
      getJokeBtn.textContent = 'Get Punchline'; // Update button text
    }).catch((error) => {
      console.error('Error fetching joke:', error);
    });
  } else if (getJokeBtn.textContent === 'Get Punchline') {
    if (jokeData) {
      jokeOnDom(jokeData, true); // Show punchline
      getJokeBtn.textContent = 'Get Another Joke'; // Update button text
    } else {
      console.error('No joke data available.');
    }
  } else {
    getJokeBtn.textContent = 'Get Joke'; // Reset button text
    document.getElementById('display-joke').innerHTML = ''; // Clear joke display
    jokeData = null; // Reset joke data
  }
};

getJokeBtn.addEventListener('click', handleButtonClick);
