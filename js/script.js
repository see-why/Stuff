const jsDiv = document.getElementById("dateJS");
const reactDiv = document.getElementById("dateReact");

const render = () => {
  jsDiv.innerHTML = `
    <div class="split">
      <h1>JS Date</h1>
      <input />
      <p>${new Date()}</p>
    </div>
  `;

  var divReact = React.createElement(
    'div', 
    { className: 'split' },
    React.createElement('h1', null, 'React Date'),
    React.createElement('input'),
    React.createElement('p', null, new Date().toString())
  )
  ReactDOM.render(divReact, reactDiv)
}

setInterval(render, 1000)