import React from 'react';
import Mouse from '../components/Mouse';

const NotFound = () => {
  return (
    <main className='not-found'>
      <div className='not-found-content'>
        <Mouse/>
        <h1>ERROR 404</h1>
        <h1>Page not found</h1>
        <i class="fas fa-user-ninja"></i>
      </div>
    </main>
  );
};

export default NotFound;