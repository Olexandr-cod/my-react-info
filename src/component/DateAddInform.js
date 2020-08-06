import React, { Component } from "react";
import "./DateAddInform";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateAddInform extends Component {
  constructor() {
    super();
    this.state = {
      data: new Date(),
    };
    this.changeDateInform = this.changeDateInform.bind(this);
  }

  changeDateInform(data) {
    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <div className="data">
        <DatePicker
          selected={this.state.data}
          onChange={this.changeDateInform}
        />
      </div>
    );
  }
}

export default DateAddInform;
