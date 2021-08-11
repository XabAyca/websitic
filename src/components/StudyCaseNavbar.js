import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import works from '../data/works.json';
import CardMode from './CardMode';
import { useHistory } from "react-router-dom";

const StudyCaseNavbar = () => {
  const { cardMode } = useContext(CardMode)
  let history = useHistory();

  const views = () => {
    if (cardMode) {
      return (
        works.works.map((work) => {
          return (
            <div
              id={work.id}
              key={work.id}
              onClick={() => {
                history.push("/works/" + work.slug + '-study-case');
                document.querySelectorAll('.card').forEach((card) => {
                  card.classList.remove('active-card')
                })
                document.getElementById(work.id).classList.add("active-card");
              }}
              className='card'
              activeClassName="active-card"
            >
              <h3>{work.project}</h3>
              <p>{work.title}</p>
            </div>
          )
        })
      )
    } else {
      return (
        works.works.map((work) => {
          return (
            <NavLink
              key={work.id}
              to={'/works/' + work.slug + '-study-case'}
              className='nav-link'
              activeClassName='nav-link-active'>
              {work.project}
            </NavLink>
          )
        })
      )
    }
  }

  return (
    <div className='study-case-navbar'>
      {
        views()
      }
    </div>
  );
};

export default StudyCaseNavbar;