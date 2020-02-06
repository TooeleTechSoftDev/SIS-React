import React, { Component } from "react";
import messageIcon from '../SISmessageICON.png';
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
    let color = 'white'
    // eslint-disable-next-line default-case
    switch(item.typeId) {
      case 0:
        color = 'red'
        break;
      case 1:
        color = 'green'
        break;
      case 2:
        color = 'yellow'
        break;
      case 3:
        color = 'blue'
        break;
    }
  let open = <img src={expand} width='15px' height='15px' alt='+' />;

  let close = <img src={collapse} width='15px' height='15px' alt='-' />;

    return (<div className='EventCell'>
    <div className='Icon'>
      <img src={messageIcon} width='40px' height='40px' alt='icon' />
    </div>
    <div className='ItemName' style={{color:color}}>{item.name}</div>
    <div className='ItemSubject'> {item.content.subject}</div>
    <div className='Button' onClick={this.handleToggle.bind(this)}>{this.state.isExpanded ? close : open }</div>
    {this.state.isExpanded ? <div className='Hidden'>{item.content.body}</div> : <div />
    }
  </div>)
  }
}