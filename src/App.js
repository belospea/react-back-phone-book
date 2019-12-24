import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Josh',
        phone: '1-355-654-8745'
      },
      {
        id: 1,
        name: 'Mark',
        phone: '1-654-578-6145'
      }
    ]
  }

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information} />
      </div>
    );
  }
}

export default App;
