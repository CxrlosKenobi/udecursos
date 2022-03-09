import React, { useLayoutEffect } from  'react';
import { Link, useLocation } from 'react-router-dom';
//
import './helpers.scss';


export function ScrollWrapper({ children }){
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};


export function NavItem(props) {
  return (
    <li>
      <Link to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};
