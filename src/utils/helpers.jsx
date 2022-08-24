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

export function parseDate(date) {
  let y = date.split('T')[0].split('-')[0]
  let m = date.split('T')[0].split('-')[1]
  let d = date.split('T')[0].split('-')[2]

  return `${d}/${m}/${y}`
};
