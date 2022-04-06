import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), posts: [1, 2, 3], comments: [6, 51, 2] };
  }
  async componentDidMount() {
    this.timerID = setInterval(() => {
      this.updateClock();
    }, 1000);

    const comm = await this.fetchComments();
    setTimeout(() => {
      this.setState({
        comments: comm,
      });
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  fetchComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 5, 15, 12, 3]);
      });
    });
  }

  updateClock() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <span>{this.state.date.toLocaleTimeString()}</span>
        <div>{this.state.posts.map((number) => `- ${number} - `)}</div>
        <div>{this.state.comments.map((com) => `+ ${com} + `)}</div>
      </div>
    );
  }
}
