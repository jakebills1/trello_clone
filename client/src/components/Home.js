import React from "react";
import axios from "axios";
class Home extends React.Component {
  state = { boards: null };
  componentDidMount() {
    axios
      .get("/api/boards")
      .then(res => this.setState({ boards: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { boards } = this.state;
    return boards ? (
      <>
        <ul>
          {boards.map(board => (
            <li key={board.id}>{board.board_title}</li>
          ))}
        </ul>
      </>
    ) : (
      <div>future spinner</div>
    );
  }
}
export default Home;
