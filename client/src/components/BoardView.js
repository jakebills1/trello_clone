import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
const BoardView = props => {
  const {
    location: {
      state: { board, lists }
    }
  } = props;
  return (
    <BoardDiv style={{ fontWeight: "bold", marginLeft: "10px" }}>
      <h1 style={{ marginLeft: "20px" }}>{board.board_title}</h1>
      <ListsContainer>
        {lists.map(list => {
          return (
            <ListBox>
              <h3 style={{ marginLeft: "15px", marginTop: "8px" }}>
                {list.list_name}
              </h3>
              <TaskList>
                {list.tasks.map(task => {
                  return (
                    <Task>
                      <span>{task.name}</span>
                      <span>
                        <Icon
                          name="circle"
                          color={
                            task.priority === "high"
                              ? "red"
                              : task.priority === "medium"
                              ? "yellow"
                              : "green"
                          }
                        />
                      </span>
                    </Task>
                  );
                })}
              </TaskList>

              <div>
                <Icon name="plus" style={{ marginLeft: "10px" }} />
                <span style={{ padding: "8px" }}>Add Another Task</span>
              </div>
            </ListBox>
          );
        })}
        <AddDiv>
          <Icon name="plus" style={{ marginLeft: "10px" }} />
          <span style={{ padding: "8px" }}>Add Another List</span>
        </AddDiv>
      </ListsContainer>
    </BoardDiv>
  );
};
export default BoardView;

const BoardDiv = styled.div`
  margin-left: 10px; !important
`;
const ListsContainer = styled.div`
  display: flex;
`;
const ListBox = styled.div`
  width: 250px;
  margin-right: 10px;
  background-color: #dfe1e6;
  border-radius: 3px;
`;
const TaskList = styled.div`
  display: flex;
  flex-direction: column;
`;
const Task = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 3px;
  margin: 0 8px 8px 8px;
`;
const AddDiv = styled.div`
  width: 250px;
  height: 40px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
`;
