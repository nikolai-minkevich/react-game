import React from "react";
import s from "./style.module.css";
// const cn = require("classnames");

class Message extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <div className={s.message}>{children}</div>;
  }
}

export default Message;
