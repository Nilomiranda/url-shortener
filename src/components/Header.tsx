import React from 'react';
import styled from 'styled-components';

// images
import { ReactComponent as Logo } from '../assets/images/logo.svg';

// styles
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  > * {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      li {
        margin: 0 15px;
        list-style: none
      }
    }
  }

  .auth-navigation {
    margin-left: auto;

    ul {
      display: flex;
      align-items: center;
    }

    .sign-up-btn {
      background: hsl(180, 66%, 49%);
      color: #FFF;
      border-radius: 15pt;
      padding: 5px 20px;
    }
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <nav className="main-navigation">
        <div className="logo">
          <Logo />
        </div>

        <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
      </nav>
      <nav className="auth-navigation">
        <ul>
          <li>Login</li>
          <li className="sign-up-btn">Signup</li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header;