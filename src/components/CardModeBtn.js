import React, { useContext } from 'react';
import CardMode from './CardMode';

const CardModeBtn = () => {
  const {toogleMode} = useContext(CardMode)
  return (
    <span className='card-mode-btn mouse-hover' onClick={toogleMode}>
      <i className="fas fa-text-height"></i>
    </span>
  );
};

export default CardModeBtn;