import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Login from './Login';
import Registration from './Registration';
import 'bootstrap/dist/css/bootstrap.css';

// import './index.css';
class TabComponent extends Component {
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
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Log In"> <Login {...this.props}/> </Tab>
        <Tab eventKey={2} title="Sign Up"> <Registration /> </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TabComponent;