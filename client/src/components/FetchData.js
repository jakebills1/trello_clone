import React from "react";
import axios from "axios";
import { DataConsumer } from "../providers/DataProvider";
class FetchData extends React.Component {
  state = { loaded: false };
  componentDidMount() {
    const {
      value: { boards, setBoards }
    } = this.props;
    if (boards.length > 0) {
      this.setState({ loaded: true });
    } else {
      axios
        .get("/api/boards")
        .then(res => {
          debugger;
          setBoards(res.data);
          this.setState({ loaded: true });
        })
        .catch(err => console.log(err));
    }
  }
  render() {
    return this.state.loaded ? this.props.children : null;
  }
}
const ConnectedFetchData = props => (
  <DataConsumer>{value => <FetchData {...props} value={value} />}</DataConsumer>
);
export default ConnectedFetchData;
