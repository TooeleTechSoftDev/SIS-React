import React, { Component } from "react";
import messageIcon from '../SISmessageICON.png';
import alertIcon from '../SISalertICON.png';
import reminderIcon from '../SISreminderICON.png';
import expand from '../expand.jpg';
import collapse from '../collapse.jpg';

export default class EventCell extends Component {

  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

handleToggle() {
  this.setState({isExpanded: !this.state.isExpanded})
  }

render() {
   let item = this.props.item
   let icon = <img src={messageIcon} alt='message icon' />
        // eslint-disable-next-line default-case
    switch(item.typeId) {
      case 0:
        icon = <img src={alertIcon} width='40px' height='40px' alt='alert icon' />
        break;
      case 1:
        icon = <img src={messageIcon} width='40px' height='40px' alt='message' />
        break;
      case 2:
        icon = <img src={reminderIcon} width='40px' height='40px' alt='reminder'/>
        break;
      case 3:
        icon = <img src={messageIcon} width='40px' height='40px' alt='message' />
        break;
        };
  let name = 'Item Name'
  // eslint-disable-next-line default-case
    switch(item.typeId) {
      case 0:
        name = 'Alert!'
        break;
      case 1:
        name = 'New Message'
        break;
      case 2:
        name = 'Reminder'
        break;
      case 3:
        name = 'New Message'
        break;
        };

  let open = <img src={expand} width='15px' height='15px' alt='+' />;

  let close = <img src={collapse} width='15px' height='15px' alt='-' />;

    return (<div className='EventCell'>
    <div className='Icon'>{icon}</div>
    <div className='ItemName'>{name}</div>
    <div className='ItemSubject'> {item.content.subject}</div>
    <div className='Button' onClick={this.handleToggle.bind(this)}>{this.state.isExpanded ? close : open }</div>
    {this.state.isExpanded ? <div className='Hidden'>{item.content.body}</div> : <div />
    }
  </div>)
  }
}
