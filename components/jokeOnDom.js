import renderToDom from '../utils/renderToDom';

const jokeOnDom = (joke, showPunchline = false) => {
  // Construct the DOM string with or without punchline
  const domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Joke</h5>
        <p class="card-text"><strong>Setup:</strong> ${joke.setup}</p>
        ${showPunchline ? `<p class="card-text"><strong>Punchline:</strong> ${joke.delivery}</p>` : ''}
      </div>
    </div>
  `;

  renderToDom('display-joke', domString);
};

export default jokeOnDom;
