import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FunctionComponent = () => {
  const activeStyle: React.CSSProperties = {
    color: '#614476',
    fontWeight: 'bold'
  };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeStyle={activeStyle} to="/users">
        Users
      </NavLink>
    </nav>
  );
};

export default Nav;
