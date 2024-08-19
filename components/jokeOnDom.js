import renderToDom from '../utils/renderToDom';

const jokeOnDom = (joke) => {
  // Check if joke is a two-part joke
  const domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Joke</h5>
        <p class="card-text"><strong>Setup:</strong> ${joke.setup}</p>
        <button id="get-punchline-btn" class="btn btn-dark">Get Punchline</button>
      </div>
    </div>
  `;

  renderToDom('display-joke', domString);

  document.getElementById('get-punchline-btn').addEventListener('click', () => {
    const punchlineDomString = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Joke</h5>
          <p class="card-text"><strong>Setup:</strong> ${joke.setup}</p>
          <p class="card-text"><strong>Punchline:</strong> ${joke.delivery}</p>
        </div>
      </div>
    `;
    renderToDom('display-joke', punchlineDomString);
  });
};

export default jokeOnDom;
