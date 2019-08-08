import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
        <h1>Your Boards</h1>
        <CardWrapper>
          {boards.map(board => (
            <Link
              key={board.board_id}
              to={{
                pathname: `/boards/${board.board_id}`,
                state: { board: board, lists: board.lists }
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <CardHeader>{board.board_title.toUpperCase()}</CardHeader>
              </Card>
            </Link>
          ))}
          <NewCard>
            <div>Create a new board</div>
          </NewCard>
        </CardWrapper>
      </>
    ) : (
      <div>future spinner</div>
    );
  }
}
export default Home;
const Card = styled.div`
  height: 100px;
  width: 200px;
  border: 1px solid black;
  border-radius: 2.5px;
  margin: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const CardWrapper = styled.div`
  display: flex;
`;
const CardHeader = styled.div`
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
`;
const NewCard = styled.div`
  height: 100px;
  width: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
