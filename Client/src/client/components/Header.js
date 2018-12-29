import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {HeaderContainer,HeaderWrapper} from "../../stylecomponent/index";

const Header = (props) => {
  console.log(props)
  const authbutton = props.auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  )
  return (
  <HeaderContainer>
    <HeaderWrapper>
      <nav style={{backgroundColor:'rgba(35, 204, 239,0.8)'}}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Rabbitmansion</Link>
          <ul className="right">
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/admins">Admins</Link></li>
            <li>{authbutton}</li>
          </ul>
        </div>
      </nav>
    </HeaderWrapper>
  </HeaderContainer>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(Header)
/*
<nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">React SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          <li>{authbutton}</li>
        </ul>
      </div>
    </nav>
 */