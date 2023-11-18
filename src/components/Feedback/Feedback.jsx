import { Component } from 'react';
class Feedback extends Component {
  state = {};

  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Good</button>
        <button type="submit">Neutral</button>
        <button type="submit">Bad</button>
      </form>
    );
  }
}

export default Feedback;
