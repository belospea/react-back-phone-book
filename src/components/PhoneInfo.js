import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: "name",
      phone: "1231231231"
    }
  };
  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { id, name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
