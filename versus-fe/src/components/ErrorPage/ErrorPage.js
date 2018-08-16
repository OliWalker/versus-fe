import React from 'react';
import './ErrorPage.css';

export default function ErrorPage(props) {
  return (
    <div className="ErrorPage">
      <h1> Ooops something went wrong </h1>
      <i className="fas fa-exclamation-triangle" />
      <h3> try hitting 'Refresh'</h3>
      <h4> or just cry </h4>
    </div>
  );
}
