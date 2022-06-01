import React from 'react';
import loadingImg from './images/loading.png';

export default function LoadingSpinner() {
  return (
    <div className='loading'>
      <img src={loadingImg} />
    </div>
  );
}
