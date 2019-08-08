import React from "react";
import styled from "styled-components";
const BoardView = props => {
  const {
    location: {
      state: { board, lists }
    }
  } = props;
  return <div style={{ fontWeight: "bold" }}>{board.board_title}</div>;
};
export default BoardView;
