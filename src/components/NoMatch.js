import React from 'react';
import space from '../assets/space.png';

function NoMatch() {
  return (
    <div className="no-match">
      <div>
        <img src={space} alt="space" />
        <p>404 Not Found!</p>
      </div>
    </div>
  );
}

export default NoMatch;
