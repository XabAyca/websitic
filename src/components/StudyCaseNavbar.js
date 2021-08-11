import React from 'react';
import { NavLink } from 'react-router-dom';
import works from '../data/works.json';

const StudyCaseNavbar = () => {

  return (
    <div className='study-case-navbar'>
      {
        works.works.map((work) => {
          return(
            <NavLink
              key={work.id}
              to={'/works/' + work.slug + '-study-case'}
              className='nav-link'
              activeClassName='nav-link-active'>
              {work.project}
            </NavLink>
          )
        })
      }
    </div>
  );
};

export default StudyCaseNavbar;