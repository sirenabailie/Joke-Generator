// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import renderToDom from '../utils/renderToDom';
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

const getJokeBTn = document.querySelector('#get-joke-btn');

getJokeBTn.addEventListener('click', () => {
  getRequest().then((joke) => jokeOnDom(joke));
  getJokeBTn.textContent = 'Get Another Joke';
});
