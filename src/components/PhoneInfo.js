import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: "name",
      phone: "1231231231"
    }
  };

  state = {
    editing: false,
    name: "",
    phone: ""
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToogleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
      return false;
    }
    return true;
  }
  

  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;

    if(!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    if(prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    console.log("render PhoneInfo" + this.props.info.id);
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="phone number"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToogleEdit}>Apply</button>
          <button onClick={this.handleRemove}>Remove</button>
        </div>
      );
    }

    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleToogleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default PhoneInfo;
