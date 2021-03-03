import React from 'react';
import s from './style.module.css';

class Layout extends React.PureComponent {
  static defaultProps = {};
  render(){
    console.log('s',s);
    const { children } = this.props
    return <div className={s.layout}>{children}</div>;
  }
}

export default Layout;