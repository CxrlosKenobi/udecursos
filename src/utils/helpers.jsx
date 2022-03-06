import React from  'react';
import { Link } from 'react-router-dom';
//
import './helpers.scss';


export function NavItem(props) {
  return (
    <li>
      <Link to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};
