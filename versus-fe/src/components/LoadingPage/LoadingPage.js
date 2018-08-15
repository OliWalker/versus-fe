import React from 'react';
import './LoadingPage.css';

const Loading = () => {
  return (
    <div className="LoadingPage">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;
