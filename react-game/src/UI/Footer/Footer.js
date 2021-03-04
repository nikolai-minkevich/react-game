import React from "react";
import s from "./style.module.css";
import logo from "./logo-rs.png";

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={s.footer}>
        <div className={s.container}>
          <span><a href="https://github.com/nikolai-minkevich">Minkevich Nikolai</a>, 2021</span>
          <a href="https://rs.school">
            <img src={logo} alt="RSSchool Logo" />
          </a>
          
        </div>
      </footer>
    );
  }
}

export default Footer;
