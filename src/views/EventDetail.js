import React, { Component } from "react";
import messageIcon from '../SISmessageICON.png';
import alertIcon from '../SISalertICON.png';
import reminderIcon from '../SISreminderICON.png';

export default class EventDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

handleToggle() {
  this.setState({isExpanded: !this.state.isExpanded})
  }

render() {
   let item = this.props.event
   let icon = <img src={messageIcon} alt='message icon' />
    // eslint-disable-next-line default-case
    switch(item.typeId) {
      case 0:
        icon = <img src={alertIcon} width='50px' height='50px' alt='alert icon' />
        break;
      case 1:
        icon = <img src={messageIcon} width='50px' height='50px' alt='message' />
        break;
      case 2:
        icon = <img src={reminderIcon} width='50px' height='50px' alt='reminder'/>
        break;
      case 3:
        icon = <img src={messageIcon} width='50px' height='50px' alt='message' />
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

    return (<div className='EventCell' onClick={ () => this.props.handleClick()}>
    <div className='Icon'>{icon}</div>
    <div className='ItemName'>{name}</div>
    <div className='ItemSubject'>{item.content.subject}</div>
    <div className='Content'>{item.content.body}</div>
  </div>)
  }
}
