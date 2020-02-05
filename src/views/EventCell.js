import React, { Component } from "react";

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
    return (<div className='EventCell'>
    <div className='ItemName' style={{color:color}}>{item.name}</div>
    <div className='ItemTo'>To: {item.to}</div>
    <div className='ItemSubject'>re: {item.content.subject}</div>
    <div className='Button' onClick={this.handleToggle.bind(this)}>{this.state.isExpanded ? '-' : '+'}</div>
    {this.state.isExpanded ? <div className='Hidden'>{item.content.body}</div> : <div />
    }
  </div>)
  }
}