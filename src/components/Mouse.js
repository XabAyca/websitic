import React, { useEffect } from 'react';

const Mouse = () => {

  useEffect(() => {

    const handleMouse = (e) => {
      let x = e.clientX +'px'
      let y = e.clientY +'px'

      setTimeout(() => {
        document.querySelector('.mouse').style.left = x;
        document.querySelector('.mouse').style.top = y;
      },100)
    }

    const changeMouseHover = () => {
      document.querySelector('.mouse').classList.add('hover')
    }

    const changeMouseLeave = () => {
      document.querySelector('.mouse').classList.remove('hover')
    }

    window.addEventListener('mousemove', handleMouse)

    document.querySelectorAll('.mouse-hover').forEach((el) => {
      el.addEventListener('mouseover',changeMouseHover)
      el.addEventListener('mouseleave',changeMouseLeave)
    });

  }, [])
  return (
    <span className="mouse">
    </span>
  );
};

export default Mouse;