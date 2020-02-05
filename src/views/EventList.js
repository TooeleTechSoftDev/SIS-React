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

handleToggle() {
  this.setState({isExpanded: !this.state.isExpanded})
}





render() {

  let results = this.state.listData.map((item) => <EventCell item = {item} />)

  return <div>{results}</div>

}
}