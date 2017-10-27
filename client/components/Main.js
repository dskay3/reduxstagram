// import react
import React from 'react';
import { Link } from 'react-router';

const Main = () =>
    <div>
      <h1>Reduxstagram</h1>
      
      {React.cloneElement(this.props.children, this.props)}
    </div>

export default Main;