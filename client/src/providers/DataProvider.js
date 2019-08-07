import React from "react";
const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;
export class DataProvider extends React.Component {
  state = { boards: [] };
  setBoards = boards => this.setState({ boards: boards, })
  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          boards: this.state.boards,
          setBoards: this.setBoards,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
