import React, { Component } from "react";
import EventList from './EventList';
import EventDetail from './EventDetail';

export default class EventContainer extends Component{
constructor (props){
  super(props);
  this.state = { selectedEvent: {}, eventList: {} };

}

selectEvent(event){
  this.setState({selectedEvent:event})
}

render() {
  let eventDetail = null;
  if (!!this.state.selectedEvent.content) {
    eventDetail = <EventDetail event={this.state.selectedEvent} handleClick={this.selectEvent.bind(this, {})}></EventDetail>
  }
  let eventList = <EventList userId='mlutes' showme={!!this.state.selectedEvent.content} handleClick={this.selectEvent.bind(this)}/>
  return <> {eventList} {eventDetail} </>
}


}
