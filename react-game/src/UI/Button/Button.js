import React from "react";
import s from "./style.module.css";

class Button extends React.PureComponent{
  render(){
    const { onClick,children } = this.props;
    return <div className={s.button} onClick={onClick}>{children}</div>
  }
}

export default Button