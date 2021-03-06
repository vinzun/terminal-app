import React from 'react';

import '../styles/startTracking.scss';
import SignUpToday from './Button/signUpToday';

const startTracking = () => {
  return (
    <div className='startTracking'>
      <div className='w-container'>
        <div className='content'>
          <p className='subHeading'>Start Tracking Your Time Today!</p>
          <p className='description'>
            Clocks are so 2000. Get the time tracking of the future.
          </p>
        </div>
        <div>
          <SignUpToday />
        </div>
      </div>
    </div>
  );
};

export default startTracking;
