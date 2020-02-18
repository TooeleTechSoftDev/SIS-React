import React, { Component } from "react";
import { sisServer } from "../helpers/sisapi";
import EventCell from "./EventCell";

export default class EventList extends Component {

constructor(props) {
  super(props);
  let userId = props.userId
  this.state = { listData: [],
                isExpanded: false };
  sisServer.fetchEvents( userId, eventJSON => this.setState({ listData: eventJSON }));
}

shouldComponentUpdate(nextProps, nextState){
  return nextProps.userId === this.props.userId
}

handleToggle() {
  this.setState({isExpanded: !this.state.isExpanded})
}

render() {
  if (this.props.showme){return null}
  let results = this.state.listData.map((item) => <EventCell item = {item} handleClick={this.props.handleClick} />)

  return <div>{results}</div>

}
}