import React, { Component, cloneElement } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// import './index.css';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      key: eventKey,
    });
  }

  render(){
    return (
      <div className="container">
        <div className="">
          { cloneElement(this.props.children, this.props) }
        </div>
      </div>
    )
  }
}

export default Hello;
