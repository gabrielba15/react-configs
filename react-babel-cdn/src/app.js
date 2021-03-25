class App extends React.Component {
  clickHandler(e) {
    e.preventDefault();
    alert('Works');
  }
  render() {
    return (
      <div>
        <h1>Hello World with React</h1>
        <button onClick={(e) => this.clickHandler(e)}>Click Me!</button>
      </div>
    );
  }
}
const root = document.getElementById('app');

ReactDOM.render(<App />, root);
